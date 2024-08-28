import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AggrementContentsPageRoutingModule } from './aggrement-contents-routing.module';

import { AggrementContentsPage } from './aggrement-contents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AggrementContentsPageRoutingModule
  ],
  declarations: [AggrementContentsPage]
})
export class AggrementContentsPageModule {}
