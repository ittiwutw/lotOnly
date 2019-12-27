import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'fav-lotto',
    loadChildren: () => import('./fav-lotto/fav-lotto.module').then( m => m.FavLottoPageModule)
  },
  {
    path: 'check-lotto',
    loadChildren: () => import('./check-lotto/check-lotto.module').then( m => m.CheckLottoPageModule)
  },
  {
    path: 'my-order',
    loadChildren: () => import('./my-order/my-order.module').then( m => m.MyOrderPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'lot-detail',
    loadChildren: () => import('./lot-detail/lot-detail.module').then( m => m.LotDetailPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'history-detail',
    loadChildren: () => import('./history-detail/history-detail.module').then( m => m.HistoryDetailPageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'withdraw-status',
    loadChildren: () => import('./withdraw-status/withdraw-status.module').then( m => m.WithdrawStatusPageModule)
  },
  {
    path: 'buy-complete',
    loadChildren: () => import('./buy-complete/buy-complete.module').then( m => m.BuyCompletePageModule)
  },
  {
    path: 'upgrade',
    loadChildren: () => import('./upgrade/upgrade.module').then( m => m.UpgradePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
