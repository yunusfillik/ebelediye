import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'profile-settings',
    loadChildren: () => import('./pages/profile-settings/profile-settings.module').then( m => m.ProfileSettingsPageModule)
  },
  {
    path: 'load-money',
    loadChildren: () => import('./pages/load-money/load-money.module').then( m => m.LoadMoneyPageModule)
  },
  {
    path: 'payment-history',
    loadChildren: () => import('./pages/payment-history/payment-history.module').then( m => m.PaymentHistoryPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'banner-detail/:id',
    loadChildren: () => import('./pages/banner-detail/banner-detail.module').then( m => m.BannerDetailPageModule)
  },
  {
    path: 'city-guide',
    loadChildren: () => import('./pages/city-guide/city-guide.module').then( m => m.CityGuidePageModule)
  },
  {
    path: 'qr-generator',
    loadChildren: () => import('./pages/qr-generator/qr-generator.module').then( m => m.QrGeneratorPageModule)
  },
  {
    path: 'balance-info',
    loadChildren: () => import('./pages/balance-info/balance-info.module').then( m => m.BalanceInfoPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./pages/my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'stores',
    loadChildren: () => import('./pages/stores/stores.module').then( m => m.StoresPageModule)
  },
  {
    path: 'store-detail/:id',
    loadChildren: () => import('./pages/store-detail/store-detail.module').then( m => m.StoreDetailPageModule)
  },
  {
    path: 'campaigns',
    loadChildren: () => import('./pages/campaigns/campaigns.module').then( m => m.CampaignsPageModule)
  },
  {
    path: 'campaign-detail/:id',
    loadChildren: () => import('./pages/campaign-detail/campaign-detail.module').then( m => m.CampaignDetailPageModule)
  },
  {
    path: 'scan-qr',
    loadChildren: () => import('./pages/scan-qr/scan-qr.module').then( m => m.ScanQrPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
