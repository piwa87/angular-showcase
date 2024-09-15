import { CommonModule, KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AtMaterialModule } from '@at-common/forms';
import { SpinnerService } from '@at-common/services';
import { Observable, catchError, debounceTime, distinctUntilChanged, filter, of, switchMap } from 'rxjs';
import { AtDeleteButtonComponent } from '../at-buttons/at-delete-button/at-delete-button.component';
import { AtDividerComponent } from '../at-divider/at-divider.component';
import { Part } from './part.model';

@Component({
  selector: 'at-partsoegning',
  standalone: true,
  imports: [AtDeleteButtonComponent, AtDividerComponent, AtMaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './at-partsoegning.component.html',
  styleUrl: './at-partsoegning.component.scss'
})
export class AtPartsoegningComponent implements OnInit {
  spinnerService = inject(SpinnerService);

  fb = inject(FormBuilder);
  searchForm = this.fb.group({
    selectedPartType: new FormControl<string>('produktionsenhed', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    searchTerm: new FormControl<string>('john', { nonNullable: true }),
    selectedPart: new FormControl<Part | null>(null)
  });

  partSearchResults: Part[] = [];
  displayedColumns: string[] = [];

  @Input() parttyper: KeyValue<string, string>[] = defaultParttyper;
  @Input({ required: true }) searchService!: (searchTerm: string, selectedType: string) => Observable<any>;

  @Output() partSelected: EventEmitter<Part | null> = new EventEmitter();

  ngOnInit(): void {
    this.initSearchListener();
    this.initSelectedPartListener();
    this.initSelectedPartTypeListener();
    this.setDisplayedColumns('');
  }

  initSearchListener(): void {
    this.searchForm.controls.searchTerm.valueChanges
      .pipe(
        debounceTime(700),
        distinctUntilChanged(),
        filter((searchTerm: string) => searchTerm.length > 1),
        switchMap((searchTerm) => {
          this.spinnerService.showSpinner();
          const selectedPartType = this.searchForm.controls.selectedPartType.value;
          return this.searchService(searchTerm, selectedPartType).pipe(
            catchError(() => {
              this.spinnerService.hideSpinner();
              return of([]);
            })
          );
        })
      )
      .subscribe((result) => {
        this.spinnerService.hideSpinner();
        this.partSearchResults = result;
        this.searchForm.controls.selectedPart.setValue(null);
        console.log('partSearchResults:', this.partSearchResults);
      });
  }

  initSelectedPartListener(): void {
    this.searchForm.controls.selectedPart.valueChanges.subscribe((selectedPart) => {
      this.partSelected.emit(selectedPart);
      console.log('Form value changed - Selected part:', selectedPart);
      if (selectedPart) {
        this.searchForm.controls.searchTerm.disable({ emitEvent: false });
        this.searchForm.controls.selectedPartType.disable({ emitEvent: false });
      }
    });
  }

  initSelectedPartTypeListener(): void {
    this.searchForm.controls.selectedPartType.valueChanges.subscribe((selectedType) => {
      this.setDisplayedColumns(selectedType);
      this.partSearchResults = [];
    });
  }

  selectPart(part: Part) {
    this.searchForm.controls.selectedPart.setValue(part);
    this.setDisplayedColumnsWhenPartIsSelected();
  }

  unselectPart(): void {
    this.searchForm.controls.selectedPart.setValue(null);
    this.searchForm.controls.searchTerm.enable({ emitEvent: false });
    this.searchForm.controls.selectedPartType.enable({ emitEvent: false });
    this.setDisplayedColumnsWhenPartIsUnselected();
  }

  setDisplayedColumns(selectedType: string): void {
    switch (selectedType) {
      case 'produktionsenhed':
        this.displayedColumns = ['navn', 'pNummer', 'cvrNummer', 'adresse', 'antalAnsatte', 'vaelg'];
        break;
      case 'byggeplads':
        this.displayedColumns = ['navn', 'id', 'adresse', 'vaelg'];
        break;
      case 'lokation':
        this.displayedColumns = ['navn', 'id', 'adresse', 'vaelg'];
        break;
      default:
        this.displayedColumns = ['navn', 'pNummer', 'cvrNummer', 'adresse', 'antalAnsatte', 'vaelg'];
        break;
    }
  }

  setDisplayedColumnsWhenPartIsSelected(): void {
    this.displayedColumns.pop();
    this.displayedColumns.push('delete');
  }

  setDisplayedColumnsWhenPartIsUnselected(): void {
    this.displayedColumns.pop();
    this.displayedColumns.push('vaelg');
  }
}

const defaultParttyper: KeyValue<string, string>[] = [
  { key: 'produktionsenhed', value: 'Produktionsenhed' },
  { key: 'byggeplads', value: 'Byggeplads' },
  { key: 'lokation', value: 'Lokation' }
];
