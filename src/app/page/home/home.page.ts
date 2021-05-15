import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items = [ { isShow: true}, { isShow: true}, { isShow: true}];
  constructor() { }

  ngOnInit() {
  }

}
