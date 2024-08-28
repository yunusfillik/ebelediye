import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AggrementContentsPage } from './aggrement-contents.page';

const routes: Routes = [
  {
    path: '',
    component: AggrementContentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AggrementContentsPageRoutingModule {}
