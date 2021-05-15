import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public passwordType: string;
  public pageStep = '1';
  constructor(
    private router: Router,
    public menuCtrl: MenuController
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    this.pageStep = '1';
  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }

  togglePasswordType() {
    this.passwordType = this.passwordType || 'password';
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }

  navigate() {
    this.router.navigateByUrl('/login');
  }

  submit() {
    this.router.navigateByUrl('/home');
  }

  nextStep(stepno) {
    this.pageStep = stepno;
  }

}
