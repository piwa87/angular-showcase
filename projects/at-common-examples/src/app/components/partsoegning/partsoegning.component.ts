import { CommonModule, KeyValue } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AtFormsModule, AtMaterialModule } from '@at-common/forms';
import { PrimaryColorDirective } from '@at-common/styling';
import { AtTextsModule } from '@at-common/texts';
import { AtPartsoegningComponent } from '../../../../../at-common/forms/src/lib/at-partsoegning/at-partsoegning.component';
import { Part } from '../../../../../at-common/forms/src/lib/at-partsoegning/part.model';
import { PartsoegningApiService } from './utils/partsoegning-api.service';

@Component({
  selector: 'app-partsoegning',
  standalone: true,
  imports: [
    AtFormsModule,
    AtMaterialModule,
    AtPartsoegningComponent,
    AtTextsModule,
    CommonModule,
    PrimaryColorDirective,
    ReactiveFormsModule
  ],
  templateUrl: './partsoegning.component.html',
  styleUrl: './partsoegning.component.scss'
})
export class PartsoegningComponent {
  api = inject(PartsoegningApiService);

  fb = inject(FormBuilder);
  fg = this.fb.group({
    part: new FormControl<Part | null>(null),
    type: new FormControl<string>('')
  });

  typeItems: KeyValue<any, string>[] = [
    { key: 'type1', value: 'Type 1' },
    { key: 'type2', value: 'Type 2' }
  ];

  typeHint = 'Angiv type af tilsynet...';

  searchService = (searchTerm: string, selectedType: string) => this.api.searchService(searchTerm, selectedType);

  onPartSelected(selectedPart: any) {
    this.fg.patchValue({ part: selectedPart });
  }
}
