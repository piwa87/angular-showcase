import { AbstractControl, ValidationErrors } from '@angular/forms';

export enum ValidationErrorCode {
  max = 'max',
  cannotBeNegative = 'cannotBeNegative',
  mustContainName = 'mustContainName',
  required = 'required',
  minlength = 'minlength',
  pattern = 'pattern',
  email = 'email',
}

export function CannotBeNegativeValidator(
  control: AbstractControl<any, any>
): ValidationErrors | null {
  const quantity = control.value;
  if (quantity < 0) {
    return {
      [ValidationErrorCode.cannotBeNegative]: { quantity },
    };
  }
  return null;
}

export function MustContainNameValidator(
  control: AbstractControl<any, any>
): ValidationErrors | null {
  const nameString = control.value;
  if (stringIsEmpty(nameString)) {
    return {
      [ValidationErrorCode.mustContainName]: { nameString },
    };
  }
  return null;
}

export function stringIsEmpty(
  stringToTest: string | null | undefined
): boolean {
  if (!stringToTest) {
    return true;
  }

  if (stringToTest === '') {
    return true;
  }
  return false;
}
