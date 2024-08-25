import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaskPredicate, PhoneMask } from 'src/app/helpers/phoneInput.helper';
import { ToastHelper } from 'src/app/helpers/toast.helper';
import { EmailValidator } from 'src/app/validators/Email.validator';
import { PasswordMatchValidator } from 'src/app/validators/PasswordsMatch.validator';
import { TCnoValidator } from 'src/app/validators/TCno.validator';

export enum MyAccountSegmentTypes {
  general = 'general',
  password = 'password',
}

export type InputTypes =
  | 'username'
  | 'identityNumber'
  | 'email'
  | 'phoneNumber'
  | 'address'
  | 'oldPassword'
  | 'newPassword'
  | 'newPasswordAgain';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  //#region variables
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef | undefined;
  avatarUrl: string =
    'https://media.licdn.com/dms/image/v2/D4D03AQHnCQ2pjeCz5g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711788860078?e=1729728000&v=beta&t=OtqPTMvry242g8CY7vUlXgyrclD0t8Y1xn6BP7GPBYs';

  phoneMask = PhoneMask;
  maskPredicate = MaskPredicate;
  phoneNumberInitialValue = '+90 (5';
  segment: MyAccountSegmentTypes = MyAccountSegmentTypes.general;
  generalFormLoading: boolean = false;
  passwordFormLoading: boolean = false;
  showOldPassword: boolean = false;
  showNewPassword: boolean = false;
  showNewPasswordAgain: boolean = false;
  generalForm: FormGroup;
  passwordForm: FormGroup;
  //#endregion
  //#region getters
  get username() {
    return this.generalForm.get('username')?.value;
  }

  get identityNumber() {
    return this.generalForm.get('identityNumber')?.value;
  }

  get email() {
    return this.generalForm.get('email')?.value;
  }

  get phoneNumber() {
    return this.generalForm.get('phoneNumber')?.value;
  }

  get address() {
    return this.generalForm.get('address')?.value;
  }

  get oldPassword() {
    return this.passwordForm.get('oldPassword')?.value;
  }

  get newPassword() {
    return this.passwordForm.get('newPassword')?.value;
  }

  get newPasswordAgain() {
    return this.passwordForm.get('newPasswordAgain')?.value;
  }
  //#endregion

  //#region setters
  set username(value: string) {
    this.generalForm.get('username')?.setValue(value);
  }

  set identityNumber(value: string) {
    this.generalForm.get('identityNumber')?.setValue(value);
  }

  set email(value: string) {
    this.generalForm.get('email')?.setValue(value);
  }

  set phoneNumber(value: string) {
    this.generalForm.get('phoneNumber')?.setValue(value);
  }

  set address(value: string) {
    this.generalForm.get('address')?.setValue(value);
  }

  set oldPassword(value: string) {
    this.passwordForm.get('oldPassword')?.setValue(value);
  }

  set newPassword(value: string) {
    this.passwordForm.get('newPassword')?.setValue(value);
  }

  set newPasswordAgain(value: string) {
    this.passwordForm.get('newPasswordAgain')?.setValue(value);
  }
  //#endregion
  //#region helper functionsƒ
  getMyAccountSegmentTypes() {
    return MyAccountSegmentTypes;
  }

  togglePasswordIcon(input: InputTypes) {
    switch (input) {
      case 'oldPassword':
        this.showOldPassword = !this.showOldPassword;
        break;
      case 'newPassword':
        this.showNewPassword = !this.showNewPassword;
        break;
      case 'newPasswordAgain':
        this.showNewPasswordAgain = !this.showNewPasswordAgain;
        break;
    }
  }

  onFocusInput(form: FormGroup, input: InputTypes) {
    form.controls[input].markAsUntouched();
    if (input === 'phoneNumber' && this[input] === '')
      this.setPhoneInputInitialValue();
  }

  onBlurInput(form: FormGroup, input: InputTypes) {
    if (input === 'phoneNumber' && this[input] === this.phoneNumberInitialValue)
      this.phoneNumber = '';
  }

  setPhoneInputInitialValue() {
    this.phoneNumber = this.phoneNumberInitialValue;
  }
  //#endregion

  constructor(private router: Router, private fb: FormBuilder, private toastHelper: ToastHelper) {
    this.generalForm = this.fb.group({
      username: ['', [Validators.required]],
      identityNumber: ['', [Validators.required, TCnoValidator()]],
      email: ['', [Validators.required, EmailValidator()]],
      phoneNumber: ['', [Validators.required, Validators.minLength(19)]],
      address: ['', [Validators.required]],
    });
    this.passwordForm = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPasswordAgain: ['', [Validators.required, Validators.minLength(6)]],
    }, { validators: PasswordMatchValidator() });
    this.username = 'Mustafa Dağlılar';
    this.identityNumber = '22222222222';
    this.phoneNumber = '+90 (507) 049 0234';
    this.address = 'İzmir, Türkiye';
  }

  ngOnInit() {}

  onGeneralFormSubmit() {
    if (this.generalForm.valid) {
      console.log('Form Submitted!', this.generalForm.value);
    } else {
      this.generalForm.markAllAsTouched();
    }
  }

  /**
   * @passwordMismatch
   * check "PasswordMatch.validator.ts" in validators folder
   */
  onPasswordFormSubmit() {
    if (this.passwordForm.valid) {
      console.log('Form Submitted!', this.passwordForm.value);
    } else {
      console.log('Form Submitted!', this.passwordForm);
      if(this.passwordForm.errors?.['passwordMismatch']) {
        this.toastHelper.presentErrorToast('Yeni Şifre ile Yeni Şifre Tekrar aynı değil!')
      }
      this.passwordForm.markAllAsTouched();
    }
  }

  selectAvatar() {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarUrl = reader.result as string;
        // Burada base64 formatında tutabilirsiniz
        const base64String = (reader.result as string).split(',')[1];
        //console.log('Base64 Image String:', base64String);
      };
      reader.readAsDataURL(file);
    }
  }
}
