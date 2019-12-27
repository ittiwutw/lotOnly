import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyCompletePageRoutingModule } from './buy-complete-routing.module';

import { BuyCompletePage } from './buy-complete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyCompletePageRoutingModule
  ],
  declarations: [BuyCompletePage]
})
export class BuyCompletePageModule {}
