import { Component } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AtMaterialModule } from '../../at-material.module';
import { ValidationErrorCode } from '../../forms-utils/custom-vallidators.util';
import { SingleFieldBaseClass } from '../../base-classes/single-field-base';

@Component({
  selector: 'at-email-input',
  standalone: true,
  imports: [CommonModule, AtMaterialModule, ReactiveFormsModule],
  templateUrl: './at-email-input.component.html',
  styleUrl: './at-email-input.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class AtEmailInputComponent extends SingleFieldBaseClass {
  override getErrors(): string | null {
    return this.getKnownErrors(EmailValidationErrors);
  }
}

export const AtEmailInputForm = new FormControl<string | null>(null, [
  Validators.required,
  Validators.email,
]);

export const EmailValidationErrors: {
  code: ValidationErrorCode;
  message: string;
}[] = [
  { code: ValidationErrorCode.required, message: 'Email skal angives' },
  { code: ValidationErrorCode.email, message: 'Forkert email format' },
];
