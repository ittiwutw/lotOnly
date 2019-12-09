import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavLottoPage } from './fav-lotto.page';

const routes: Routes = [
  {
    path: '',
    component: FavLottoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavLottoPageRoutingModule {}
