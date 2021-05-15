import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-routes',
  templateUrl: './add-routes.page.html',
  styleUrls: ['./add-routes.page.scss'],
})
export class AddRoutesPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigateByUrl('/routes-rates');
  }

}
