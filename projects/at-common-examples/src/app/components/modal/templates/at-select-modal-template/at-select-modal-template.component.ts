import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { AtTextsModule } from '@at-common/texts';

@Component({
  selector: 'app-at-select-modal-template',
  standalone: true,
  imports: [AtTextsModule, CommonModule, MatDialogModule, MatSelectModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './at-select-modal-template.component.html',
  styleUrl: './at-select-modal-template.component.scss'
})
export class AtSelectModalTemplateComponent {
  selectFormControl = new FormControl('', Validators.required);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      content: string;
      selectLabel: string;
      selectOptions: { key: string; value: string }[];
      btnConfirmText: string;
      btnCancelText: string;
    },
    public dialogRef: MatDialogRef<AtSelectModalTemplateComponent>
  ) {}

  get isOptionsEmpty(): boolean {
    return this.data.selectOptions.length > 0;
  }

  get isConfirmBtnDisabled(): boolean {
    return this.selectFormControl.invalid;
  }

  closeDialog() {
    if (this.isConfirmBtnDisabled) return;
    const data = { confirmed: true, selectedOption: this.selectFormControl.value };
    this.dialogRef.close(data);
  }

  getIdString(fieldName: string, fieldValue?: string) {
    return 'modal' + this.data.title + '-' + fieldName + `${fieldValue ? `-${fieldValue}` : ''}`;
  }
}
