import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {

  isWithdraw = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickWithDraw() {
    this.isWithdraw = true;
  }

  onClickConfirm() {
    this.router.navigate(['/tabs/withdraw-status']);
  }

}
