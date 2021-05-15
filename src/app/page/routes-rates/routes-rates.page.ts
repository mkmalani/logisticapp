import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes-rates',
  templateUrl: './routes-rates.page.html',
  styleUrls: ['./routes-rates.page.scss'],
})
export class RoutesRatesPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigateByUrl('/home');
  }

  addRoute() {
    this.router.navigate(['/add-routes']);
  }
}
