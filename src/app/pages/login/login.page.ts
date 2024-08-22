import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaskPredicate, PhoneMask } from 'src/app/helpers/phoneInput.helper';
import { AuthService } from 'src/app/services/auth.service';
import { StorageKeys, StorageService } from 'src/app/services/storage.service';
import { tcnoValidator } from 'src/app/validators/tcno.validator';

export enum LoginSegmentTypes {
  login = 'login',
  register = 'register',
}

export type InputTypes =
  | 'username'
  | 'password'
  | 'identityNumber'
  | 'phoneNumber';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //#region variables
  phoneMask = PhoneMask;
  maskPredicate = MaskPredicate;
  phoneNumberInitialValue = '+90 (5';
  segment: LoginSegmentTypes = LoginSegmentTypes.login;
  loginLoading: boolean = false;
  registerLoading: boolean = false;
  showPassword: boolean = false;
  loginForm: FormGroup;
  registerForm: FormGroup;
  //#endregion

  //#region getters
  get username() {
    return this.loginForm.get('username')?.value;
  }

  get password() {
    return this.loginForm.get('password')?.value;
  }

  get identityNumber() {
    return this.registerForm.get('identityNumber')?.value;
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber')?.value;
  }
  //#endregion

  //#region setters
  set username(value: string) {
    this.loginForm.get('username')?.setValue(value);
  }

  set password(value: string) {
    this.loginForm.get('password')?.setValue(value);
  }

  set identityNumber(value: string) {
    this.registerForm.get('identityNumber')?.setValue(value);
  }

  set phoneNumber(value: string) {
    this.registerForm.get('phoneNumber')?.setValue(value);
  }
  //#endregion

  //#region helper functionsƒ
  getLoginSegmentTypes() {
    return LoginSegmentTypes;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
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

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.registerForm = this.fb.group({
      identityNumber: ['', [Validators.required, tcnoValidator()]],
      phoneNumber: ['', [Validators.required, Validators.minLength(19)]],
    });
    this.username = 'mobiluser';
    this.password = '12345Aa...';
  }

  ngOnInit(): void {}

  /**
   * this.loginForm.markAllAsTouched();
   * Tüm alanları "touched" olarak işaretler
   * Bu sayede error textler ekranda gösterilir.
   */
  async onLoginSubmit() {
    if (!this.loginForm.valid) return this.loginForm.markAllAsTouched();
    this.loginLoading = true;
    const res = await this.authService.login(this.username, this.password);
    this.loginLoading = false;
    if (!res.success) return;
    const userData = { username: this.username, password: this.password };
    this.storageService.set(StorageKeys.LOGGED_USER, JSON.stringify(userData));
    this.router.navigate(['/tabs']);
  }

  /**
   * this.loginForm.markAllAsTouched();
   * Tüm alanları "touched" olarak işaretler
   * Bu sayede error textler ekranda gösterilir.
   */
  onRegisterSubmit() {
    this.registerLoading = true;
    setTimeout(() => {
      this.registerLoading = false;
    }, 1000);
    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
