import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public passwordType: string;
  constructor(
    private router: Router,
    public platform: Platform,
    public menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      console.log('Width: ' + this.platform.width());
      console.log('Height: ' + this.platform.height());
    });
  }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    await this.menuCtrl.close();
    await this.menuCtrl.enable(false);
  }

  async ionViewDidLeave() {
    await this.menuCtrl.open();
    await this.menuCtrl.enable(true);
  }

  togglePasswordType() {
    this.passwordType = this.passwordType || 'password';
    this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
  }

  navigate() {
    this.router.navigateByUrl('/forgot');
  }

  submit() {
    this.router.navigateByUrl('/home');
  }

  navigateToSignUp() {
    this.router.navigateByUrl('/signup');
  }

}
