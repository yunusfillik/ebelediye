import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function TCnoValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const tcNo = control.value as string;

    if (typeof tcNo !== 'string' || tcNo.length !== 11) return { invalidTCNo: true };
    if (isNaN(Number(tcNo))) return { invalidTCNo: true };
    if (tcNo[0] === '0') return { invalidTCNo: true };

    let oddSum = 0;
    let evenSum = 0;
    let calculatedDigit = 0;
    let totalSum = 0;
    const invalidTcNos = [
      '11111111110', '22222222220', '33333333330', '44444444440',
      '55555555550', '66666666660', '77777777770', '88888888880',
      '99999999990'
    ];

    // Calculate the sum of odd-indexed digits
    for (let i = 0; i < 9; i += 2) {
      oddSum += parseInt(tcNo[i]);
    }

    // Calculate the sum of even-indexed digits
    for (let i = 1; i < 8; i += 2) {
      evenSum += parseInt(tcNo[i]);
    }

    // Apply the validation formula
    oddSum *= 7;
    calculatedDigit = oddSum - evenSum;
    if (calculatedDigit % 10 !== parseInt(tcNo[9])) return { invalidTCNo: true };

    // Calculate the total sum of the first 10 digits
    for (let i = 0; i < 10; i++) {
      totalSum += parseInt(tcNo[i]);
    }

    if (totalSum % 10 !== parseInt(tcNo[10])) return { invalidTCNo: true };

    // Check if the TC No is in the list of invalid numbers
    if (invalidTcNos.includes(tcNo)) return { invalidTCNo: true };

    return null; // Valid
  };
}
