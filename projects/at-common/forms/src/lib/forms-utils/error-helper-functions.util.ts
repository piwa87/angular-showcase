import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

export const printErrors = (
  control: AbstractControl,
  path: string = ''
): void => {
  if (control instanceof FormGroup) {
    Object.keys(control.controls).forEach((key) => {
      const childControl = control.get(key);
      if (childControl) {
        printErrors(childControl, `${path}${key}.`);
      }
    });
  } else if (control instanceof FormArray) {
    control.controls.forEach((childControl, index) => {
      printErrors(childControl, `${path}${index}.`);
    });
  } else if (control instanceof FormControl) {
    if (control.errors) {
      console.log(`${path} has following errors`, control.errors);
    }
  }
};

export function collectAllValidationErrors(
  control: AbstractControl
): ValidationErrors | null {
  if (!control || control.valid) {
    return null;
  }

  let errors: ValidationErrors | null = control.errors || null;

  if (control instanceof FormGroup) {
    Object.keys(control.controls).forEach((key) => {
      const childErrors = collectAllValidationErrors(
        control.get(key) as AbstractControl
      );
      if (childErrors) {
        errors = errors || {};
        errors[key] = childErrors;
      }
    });
  }

  return errors;
}
