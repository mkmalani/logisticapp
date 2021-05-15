import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {
  data = [ { isEdit: true}, { isEdit: false}, { isEdit: false}];
  constructor(private router: Router,) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigateByUrl('/home');
  }

}
