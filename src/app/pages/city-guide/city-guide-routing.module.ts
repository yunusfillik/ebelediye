import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityGuidePage } from './city-guide.page';

const routes: Routes = [
  {
    path: '',
    component: CityGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityGuidePageRoutingModule {}
