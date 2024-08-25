import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrGeneratorPageRoutingModule } from './qr-generator-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { QrGeneratorPage } from './qr-generator.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrGeneratorPageRoutingModule,
    QRCodeModule,
    SharedModule
  ],
  declarations: [QrGeneratorPage]
})
export class QrGeneratorPageModule {}
