import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

type CardTypes = 'Visa' | 'MasterCard' | 'American Express' | 'Discover' | 'Troy' | 'Unknown';
@Component({
  selector: 'app-load-money',
  templateUrl: './load-money.page.html',
  styleUrls: ['./load-money.page.scss'],
})

export class LoadMoneyPage {
  paymentData = {
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    amount: null
  };

  cardLogos: { [key in CardTypes]: string | null } = {
    'Visa': 'assets/images/payment-logos/visa.png',
    'MasterCard': 'assets/images/payment-logos/mastercard.jpg',
    'American Express': 'assets/images/payment-logos/american-exp.png',
    'Discover': 'assets/images/payment-logos/discover.png',
    'Troy': 'assets/images/payment-logos/troy.png',
    'Unknown': null
  };

  cardType: CardTypes = 'Unknown';
  cardLogo: string | null = null;

  constructor(private toastController: ToastController) {}

  updateCardType() {
    this.cardType = this.getCardType(this.paymentData.cardNumber) as CardTypes;
    this.cardLogo = this.cardLogos[this.cardType];

  }

  validateCardHolder(event: any) {
    const input = event.target.value;
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(input)) {
      event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
    }
  }

  validateCardNumber(event: any) {
    const input = event.target.value;
    const regex = /^[0-9\s]*$/;
    if (!regex.test(input)) {
      event.target.value = input.replace(/[^0-9\s]/g, '');
    }
  }

  validateExpiryDate(event: any) {
    const input = event.target.value;
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(input)) {
      event.target.value = input.replace(/[^0-9\/]/g, '');
    }
  }

  validateCvc(event: any) {
    const input = event.target.value;
    const regex = /^[0-9]*$/;
    if (!regex.test(input)) {
      event.target.value = input.replace(/[^0-9]/g, '');
    }
  }

   
  getCardType(cardNumber: string): string {
    const cardNumberStr = cardNumber.replace(/\D/g, '');
  
    if (cardNumberStr.startsWith('4')) {
      return 'Visa';
    } else if (/^5[1-5]/.test(cardNumberStr)) {
      return 'MasterCard';
    } else if (/^3[47]/.test(cardNumberStr)) {
      return 'American Express';
    } else if (/^6/.test(cardNumberStr)) {
      return 'Discover';
    } else if (/^60/.test(cardNumberStr)) {
      return 'Troy';
    }
  
    return 'Unknown';
  }

  async submitPayment() {
    if (this.isFormValid()) {
      // Burada ödeme işlemi yapılabilir
      const toast = await this.toastController.create({
        message: 'Ödeme başarılı!',
        duration: 2000,
        color: 'success'
      });
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'Lütfen tüm alanları düzgün doldurduğunuzdan emin olun.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }

  private isFormValid() {
    // Burada formun geçerliliğini kontrol edebilirsiniz
    return this.paymentData.cardHolder && this.paymentData.cardNumber &&
           this.paymentData.expiryDate && this.paymentData.cvc &&
           this.paymentData.amount;
  }
  updateCardPreview() {
    // Herhangi bir ek işleme gerek yok, ngModel zaten otomatik olarak güncellenir.
  }

}
