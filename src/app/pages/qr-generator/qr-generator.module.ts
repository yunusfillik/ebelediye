import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrGeneratorPageRoutingModule } from './qr-generator-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { QrGeneratorPage } from './qr-generator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrGeneratorPageRoutingModule,
    QRCodeModule
  ],
  declarations: [QrGeneratorPage]
})
export class QrGeneratorPageModule {}
