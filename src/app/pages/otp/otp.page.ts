import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IonInput, ModalController } from '@ionic/angular';
import { ToastHelper } from 'src/app/helpers/toast.helper';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  @ViewChildren('otpInput') otpInputs: QueryList<IonInput>;

  inputCount: number = 6;
  otp: string[] = ['', '', '', '', '', ''];
  digits: number[] = [0, 1, 2, 3, 4, 5];
  allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private modalCtrl: ModalController,
    private toastHelper: ToastHelper) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  submit() {
    /**todo */
    console.log(this.otp)
    const allInputsAllowed = this.otp.every(x=> x.trim() !== '');
    if(!allInputsAllowed) {
      this.toastHelper.presentErrorToast(`Tüm değerler numara olmalı!`);
      return;
    };
    this.closeKeyboard();
  }

  onInput(event: any, index: number) {
    const value = event.target.value;
    const insertFromPaste = event.inputType === 'insertFromPaste';
    if (insertFromPaste || value.length !== 1 || !this.allowedKeys.includes(value)) return;
    this.setInput(value, index);
  }

  onKeyDown(event: any, index: number) {
    if (event.key === 'Backspace' && this.otp[index] === '') {
      this.moveFocus(index - 1);
    }
    if (this.allowedKeys.includes(event.key) && this.otp[index] !== '') {
      this.setInput(event.key, index);
    }
  }

  setInput(value: string, index: number) {
    this.otp[index] = value;
    if (index < this.digits.length - 1) this.moveFocus(index + 1);
    else if (index === this.digits.length - 1) this.submit();
  }

  moveFocus(index: number) {
    if (index >= 0 && index < this.digits.length) {
      setTimeout(() => {
        this.otpInputs.toArray()[index].setFocus();
      }, 10);
    }
  }

  onPaste(e: any) {
    const pasteValue = e.clipboardData?.getData('text/plain');
    const otpRegex = /^\d{6}$/;
    if (!otpRegex.test(pasteValue)) {
      this.toastHelper.presentErrorToast(`Sadece 6 haneli ve sayılardan oluşan içerik yapıştırılabilir!`);
      return;
    }
    this.otp = pasteValue.split('').slice(0, 6);
    this.fillInputs();
    setTimeout(() => {
      this.submit();
    }, 10);
  }

  fillInputs() {
    this.otpInputs.forEach((input, index) => {
      input.value = this.otp[index];
    });
  }

  closeKeyboard() {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement) {
      setTimeout(() => {
        activeElement.blur();
      }, 10);
    }
  }

}
