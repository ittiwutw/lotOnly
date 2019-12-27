import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lot-detail',
  templateUrl: './lot-detail.page.html',
  styleUrls: ['./lot-detail.page.scss'],
})
export class LotDetailPage implements OnInit {

  isOrder = false;
  isBuy = false;
  isPay = false;
  firstName: '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickOrder() {
    this.isOrder = true;
    this.isBuy = true;
  }

  onClickBuy() {
    this.isBuy = false;
    this.isPay = true;
  }

  onClickEdit() {
    this.isBuy = true;
    this.isPay = false;
  }

  onClickPay() {
    this.router.navigate(['/tabs/buy-complete']);
  }

}
