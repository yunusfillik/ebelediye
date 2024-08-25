import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastHelper {

  constructor(private toastController: ToastController) {}

  async presentErrorToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: 'dark',
      position: 'bottom'
    });
    await toast.present();
  }

  async presentSuccessToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      color: 'success',
      position: 'bottom'
    });
    await toast.present();
  }
}
