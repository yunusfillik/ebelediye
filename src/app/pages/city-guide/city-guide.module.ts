import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityGuidePageRoutingModule } from './city-guide-routing.module';

import { CityGuidePage } from './city-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityGuidePageRoutingModule
  ],
  declarations: [CityGuidePage]
})
export class CityGuidePageModule {}
