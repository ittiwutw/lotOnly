import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'fav',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../fav-lotto/fav-lotto.module').then(m => m.FavLottoPageModule)
          }
        ]
      },
      {
        path: 'check',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../check-lotto/check-lotto.module').then(m => m.CheckLottoPageModule)
          }
        ]
      },
      {
        path: 'lot-detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../lot-detail/lot-detail.module').then(m => m.LotDetailPageModule)
          }
        ]
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../history/history.module').then(m => m.HistoryPageModule)
          }
        ]
      },
      {
        path: 'history-detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../history-detail/history-detail.module').then(m => m.HistoryDetailPageModule)
          }
        ]
      },
      {
        path: 'withdraw',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../withdraw/withdraw.module').then(m => m.WithdrawPageModule)
          }
        ]
      },
      {
        path: 'withdraw-status',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../withdraw-status/withdraw-status.module').then(m => m.WithdrawStatusPageModule)
          }
        ]
      },
      {
        path: 'buy-complete',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../buy-complete/buy-complete.module').then(m => m.BuyCompletePageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'upgrade',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../upgrade/upgrade.module').then(m => m.UpgradePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
