import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { AtTextsModule } from '@at-common/texts';
import { convertToInternationalKebab } from '@at-common/utils';
import { CheckboxItem } from './checkbox-item.model';

@Component({
  selector: 'app-checklist-modal-template',
  standalone: true,
  templateUrl: './at-checklist-modal-template.component.html',
  styleUrls: ['./at-checklist-modal-template.component.scss'],
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule,
    MatListModule,
    MatCheckboxModule,
    AtTextsModule,
    MatButtonModule
  ]
})
export class AtChecklistModalTemplateComponent implements OnInit {
  checkboxFormGroup!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      fortrydButton: string;
      tilfoejButton: string;
      items: CheckboxItem[];
    },
    public dialogRef: MatDialogRef<AtChecklistModalTemplateComponent>,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.checkboxFormGroup = this.formBuilder.group({
      [FormControlName.CheckboxItems]: ''
    });
  }

  closeDialog() {
    const result = this.selectedItemsControl.value;
    this.dialogRef.close(result);
  }

  getFormControl(name: string): FormControl {
    return this.checkboxFormGroup.get(name) as FormControl;
  }
  get selectedItemsControl() {
    return this.getFormControl(FormControlName.CheckboxItems);
  }
  kebabText(displayText: string) {
    return convertToInternationalKebab(displayText);
  }
}

enum FormControlName {
  CheckboxItems = 'CheckboxItems'
}
