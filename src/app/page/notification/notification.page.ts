import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  data = [ { isEdit: true}, { isEdit: false}, { isEdit: false}];
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigateByUrl('/booking-history');
  }
}
