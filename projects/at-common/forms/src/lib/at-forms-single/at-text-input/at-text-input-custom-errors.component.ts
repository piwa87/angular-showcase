import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AtMaterialModule } from '../../at-material.module';
import { SingleFieldBaseClass } from '../../base-classes/single-field-base';
import { ValidationErrorCode } from '../../forms-utils/custom-vallidators.util';

@Component({
  selector: 'at-text-input-custom-errors',
  standalone: true,
  imports: [CommonModule, AtMaterialModule, ReactiveFormsModule],
  templateUrl: './at-text-input.component.html',
  styleUrl: './at-text-input.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtTextInputCustomErrorsComponent extends SingleFieldBaseClass {
  @Input() label: string = '';

  override getErrors(): string | null {
    return this.getKnownErrors(CustomValidationErrors);
  }
}

export const AtTextInputCustomErrorsForm = new FormControl<string | null>(
  null,
  [Validators.required, Validators.minLength(4)]
);

export const CustomValidationErrors: {
  code: ValidationErrorCode;
  message: string;
}[] = [
  {
    code: ValidationErrorCode.required,
    message: '[custom] Skal udfyldes',
  },
  {
    code: ValidationErrorCode.minlength,
    message: '[custom] Angiv mindst 4 tegn',
  },
];
