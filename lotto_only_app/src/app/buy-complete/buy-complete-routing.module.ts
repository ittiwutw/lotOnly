import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyCompletePage } from './buy-complete.page';

const routes: Routes = [
  {
    path: '',
    component: BuyCompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyCompletePageRoutingModule {}
