import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.page.html',
  styleUrls: ['./qr-generator.page.scss'],
})
export class QrGeneratorPage implements OnInit {
  qrCodeValue = 'https://example.comhttps://example.comhttps://example.comhttps://example.com';
  qrCodeSize = 256;
  balance = 255;
  cardNumber = '1234 5678 **** ****';
  cardHolderName = 'Mustafa Dağlılar';


  countdown = 60; // Sayaç başlangıç süresi
  countdownSubscription: Subscription | null = null;

  constructor(private router: Router) { }

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    // Sayaç temizlenmeli
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }

  startCountdown() {
    this.countdownSubscription = interval(1000).subscribe(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.refreshQRCode();
        this.countdown = 60; // Sayaç sıfırlanır ve tekrar başlar
      }
    });
  }

  refreshQRCode() {
    // QR kodu değerini değiştirir
    this.qrCodeValue = this.generateNewQRCodeValue();
  }

  generateNewQRCodeValue(): string {
    // QR kodu değerini rastgele oluşturur veya değiştirir
    return `https://example.com/${Math.random()}`;
  }

  closePage() {
    this.router.navigateByUrl('/tabs/home'); // Sayfayı kapat ve ana sayfaya dön
  }

}
