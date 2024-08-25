import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PasswordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup;
    const newPassword = formGroup.get('newPassword');
    const newPasswordAgain = formGroup.get('newPasswordAgain');

    if (newPassword && newPasswordAgain && newPassword.value !== newPasswordAgain.value) {
      return { passwordMismatch: true };
    }

    return null;
  };
}
