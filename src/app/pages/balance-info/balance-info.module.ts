import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalanceInfoPageRoutingModule } from './balance-info-routing.module';

import { BalanceInfoPage } from './balance-info.page';
import { SharedModule } from 'src/app/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalanceInfoPageRoutingModule,
    SharedModule
  ],
  declarations: [BalanceInfoPage]
})
export class BalanceInfoPageModule {}
