import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavLottoPageRoutingModule } from './fav-lotto-routing.module';

import { FavLottoPage } from './fav-lotto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavLottoPageRoutingModule
  ],
  declarations: [FavLottoPage]
})
export class FavLottoPageModule {}
