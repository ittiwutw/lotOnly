import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.page.html',
  styleUrls: ['./history-detail.page.scss'],
})
export class HistoryDetailPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickWithDraw() {
    this.router.navigate(['/tabs/withdraw']);
  }

}
