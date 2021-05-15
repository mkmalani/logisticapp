import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  acivatedTab = 'summary';

  constructor() { }

  ngOnInit() {
  }

  changeTab(tab) {
    this.acivatedTab = tab;
  }

}