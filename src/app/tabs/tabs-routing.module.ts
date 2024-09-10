import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'qr-generator',
        loadChildren: () => import('../pages/qr-generator/qr-generator.module').then( m => m.QrGeneratorPageModule)
      },
      {
        path: 'balance-info',
        loadChildren: () => import('../pages/balance-info/balance-info.module').then( m => m.BalanceInfoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
