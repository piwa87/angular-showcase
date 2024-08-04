import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import {
  defaultErrorMessage,
  KnownValidationError,
  KnownValidationErrors,
} from '../forms-utils/known-validation-errors.util';

@Component({ template: '' })
export abstract class AceOfBaseClass {
  @Input() errors: ValidationErrors | null = null;

  getErrors(formControlName?: string): string | null {
    return this.getKnownErrors(KnownValidationErrors, formControlName);
  }

  getKnownErrors(
    knownErrors: KnownValidationError[],
    formControlName?: string
  ): string | null {
    const getErrorMessageFromCode = (
      errorCode: string,
      knownErr = knownErrors
    ): string =>
      knownErr.find((error) => error.code === errorCode)?.message ||
      defaultErrorMessage;

    if (this.errors && formControlName) {
      const fcSpecificErrors = this.errors?.[formControlName];

      if (this.errors?.[formControlName]) {
        return getErrorMessageFromCode(Object.keys(fcSpecificErrors)[0] ?? '');
      }
    } else if (this.errors) {
      return getErrorMessageFromCode(Object.keys(this.errors)[0] ?? '');
    }
    return null;
  }
}
