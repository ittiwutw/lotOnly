import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckLottoPageRoutingModule } from './check-lotto-routing.module';

import { CheckLottoPage } from './check-lotto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckLottoPageRoutingModule
  ],
  declarations: [CheckLottoPage]
})
export class CheckLottoPageModule {}
