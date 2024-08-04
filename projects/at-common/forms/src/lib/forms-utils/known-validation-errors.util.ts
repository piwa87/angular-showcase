import { ValidationErrorCode } from './custom-vallidators.util';

export interface KnownValidationError {
  code: ValidationErrorCode;
  message: string;
}

export const KnownValidationErrors: KnownValidationError[] = [
  { code: ValidationErrorCode.max, message: 'Værdien er for høj' },
  {
    code: ValidationErrorCode.cannotBeNegative,
    message: 'Værdien må ikke være negativ',
  },
  {
    code: ValidationErrorCode.mustContainName,
    message: 'Der skal indtastes et navn',
  },
  { code: ValidationErrorCode.required, message: 'Feltet er påkrævet' },
  {
    code: ValidationErrorCode.minlength,
    message: 'Minimum længde er ikke opnået',
  },
  {
    code: ValidationErrorCode.pattern,
    message: 'Forkert format',
  },
  { code: ValidationErrorCode.email, message: 'E-mail har forkert format' },
];

export const defaultErrorMessage = 'Ukendt fejl';
