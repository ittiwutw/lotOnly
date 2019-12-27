import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawStatusPageRoutingModule } from './withdraw-status-routing.module';

import { WithdrawStatusPage } from './withdraw-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawStatusPageRoutingModule
  ],
  declarations: [WithdrawStatusPage]
})
export class WithdrawStatusPageModule {}
