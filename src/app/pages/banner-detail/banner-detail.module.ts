import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BannerDetailPageRoutingModule } from './banner-detail-routing.module';

import { BannerDetailPage } from './banner-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BannerDetailPageRoutingModule
  ],
  declarations: [BannerDetailPage]
})
export class BannerDetailPageModule {}
