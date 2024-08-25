import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function EmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // İsteğe bağlı: Boş alanları geçersiz saymamak için
    }

    // Basit bir e-posta regex kontrolü
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = emailPattern.test(control.value);

    return valid ? null : { invalidEmail: true };
  };
}
