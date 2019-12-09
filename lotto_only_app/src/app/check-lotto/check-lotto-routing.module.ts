import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckLottoPage } from './check-lotto.page';

const routes: Routes = [
  {
    path: '',
    component: CheckLottoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckLottoPageRoutingModule {}
