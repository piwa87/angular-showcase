import { CommonModule, KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AtMaterialModule } from '@at-common/forms';
import { SpinnerService } from '@at-common/services';
import { Observable, catchError, debounceTime, distinctUntilChanged, filter, of, switchMap, timeout } from 'rxjs';
import { PartsoegningResponse } from '../../../../../at-common-examples/src/app/components/partsoegning/utils/partsoegning-api.service';
import { AtDeleteButtonComponent } from '../at-buttons/at-delete-button/at-delete-button.component';
import { AtDividerComponent } from '../at-divider/at-divider.component';
import { Adresse, Part } from './part.model';

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
    selectedPartType: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    searchTerm: new FormControl<string>('', { nonNullable: true }),
    selectedPart: new FormControl<Part | null>(null)
  });

  partSearchResults: Part[] = [];
  displayedColumns: string[] = [];

  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPage: number = 0;
  totalCount: number = 0;
  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;

  @Input() parttyper: KeyValue<string, string>[] = defaultParttyper;
  @Input({ required: true }) searchService!: (
    searchTerm: string,
    selectedType: string,
    page: number,
    size: number
  ) => Observable<PartsoegningResponse>;

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
          return this.searchService(searchTerm, selectedPartType, this.currentPage, this.pageSize).pipe(
            catchError(() => {
              this.spinnerService.hideSpinner();
              return of({} as PartsoegningResponse);
            })
          );
        })
      )
      .subscribe((response) => {
        this.partSearchResults = response.data!;
        this.spinnerService.hideSpinner();
        this.searchForm.controls.selectedPart.setValue(null);
        console.log('partSearchResults:', this.partSearchResults);
        this.totalCount = response.paginationInfo?.TotalCount || 0;
        this.hasNextPage = response.paginationInfo?.HasNextPage || false;
        this.hasPreviousPage = response.paginationInfo?.HasPreviousPage || false;
      });
  }

  onPaginateChange(event: any) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;

    const searchTerm = this.searchForm.controls.searchTerm.value;
    const selectedPartType = this.searchForm.controls.selectedPartType.value;
    this.spinnerService.showSpinner();

    this.searchService(searchTerm, selectedPartType, this.currentPage, this.pageSize)
      .pipe(
        timeout(4000),
        catchError((error) => {
          this.spinnerService.hideSpinner();
          if (error.name === 'TimeoutError') {
            console.log('Search request timed out after 5 seconds.');
          } else {
            console.log('An error occurred:', error);
          }
          return of({} as PartsoegningResponse);
        })
      )
      .subscribe((response) => {
        this.partSearchResults = response.data ?? [];
        this.spinnerService.hideSpinner();
        console.log('partSearchResults:', this.partSearchResults);
        this.totalCount = response.paginationInfo?.TotalCount || 0;
        this.hasNextPage = response.paginationInfo?.HasNextPage || false;
        this.hasPreviousPage = response.paginationInfo?.HasPreviousPage || false;
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
    const formControl = this.searchForm.controls.selectedPartType;
    this.toggleSearchTermControl(formControl.value);
    formControl.valueChanges.subscribe((selectedType) => {
      this.toggleSearchTermControl(selectedType);
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
        this.displayedColumns = ['navn', 'id', 'adresse-lokation', 'vaelg'];
        break;
      default:
        this.displayedColumns = ['navn', 'pNummer', 'cvrNummer', 'adresse', 'antalAnsatte', 'vaelg'];
        break;
    }
  }

  setDisplayedColumnsWhenPartIsSelected(): void {
    this.displayedColumns[0] = 'valgtPart';
    this.displayedColumns.pop();
    this.displayedColumns.push('delete');
  }

  setDisplayedColumnsWhenPartIsUnselected(): void {
    this.displayedColumns[0] = 'navn';
    this.displayedColumns.pop();
    this.displayedColumns.push('vaelg');
  }

  toggleSearchTermControl(selectedPartTypeValue: string): void {
    if (!selectedPartTypeValue) {
      this.searchForm.controls.searchTerm.disable({ emitEvent: false });
    } else {
      this.searchForm.controls.searchTerm.enable({ emitEvent: false });
    }
  }

  public mapAdresseToString(adresse: Adresse): string {
    return `${adresse.vejnavn} ${adresse.husnummerFra}, ${adresse.postnummer} ${adresse.postdistrikt}`;
  }
  public mapRutAdresseToString(adresse: Adresse): string {
    return `${adresse.vejnavn} ${adresse.husnummerFra}, ${adresse.postnummer} ${adresse.bynavn}`;
  }
}

const defaultParttyper: KeyValue<string, string>[] = [
  { key: 'produktionsenhed', value: 'Produktionsenhed' },
  { key: 'byggeplads', value: 'Byggeplads' },
  { key: 'lokation', value: 'Lokation' },
  { key: 'ukendt', value: 'Ukendt' }
];
