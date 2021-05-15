import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  public passwordType: string;
  public pageStep = '1';
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.pageStep = '1';
  }

  togglePasswordType() {
    this.passwordType = this.passwordType || 'password';
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }

  navigate() {
    this.router.navigateByUrl('/home');
  }

  submit() {
    this.router.navigateByUrl('/home');
  }

  nextStep(stepno) {
    this.pageStep = stepno;
  }
}
