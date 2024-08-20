import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalanceInfoPageRoutingModule } from './balance-info-routing.module';

import { BalanceInfoPage } from './balance-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceInfoPageRoutingModule
  ],
  declarations: [BalanceInfoPage]
})
export class BalanceInfoPageModule {}
