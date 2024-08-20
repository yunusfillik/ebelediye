import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BalanceInfoPage } from './balance-info.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BalanceInfoPageRoutingModule {}
