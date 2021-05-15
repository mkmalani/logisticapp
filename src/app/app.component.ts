import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Log In', url: '/login', icon: 'home.png' },
    { title: 'Home', url: '/home', icon: 'home.png' },
    { title: 'My Order', url: '/order-detail', icon: 'myorder.png' },
    { title: 'Book History', url: '/booking-history', icon: 'myorder.png' },
    { title: 'My Bids', url: '/my-bids', icon: 'mybid.png' },
    { title: 'Vehicles', url: '/vehicles', icon: 'vehicles.png' },
    { title: 'Routes & Rates', url: '/routes-rates', icon: 'routes.png' },
    { title: 'Edit Profile', url: '/editprofile', icon: 'editprofile.png' },
    { title: 'Privacy Policy', url: '/home', icon: 'privacy.png' },
    { title: 'About Us', url: '/home', icon: 'aboutus.png' },
    { title: 'Contact Us', url: '/home', icon: 'contactus.png' },
    { title: 'Log Out', url: '/login', icon: 'logout.png' },
  ];
  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.overlaysWebView(true);
      this.splashScreen.hide();
    });
  }

  editProfile() {
    this.router.navigateByUrl('/editprofile');
    this.menuCtrl.close();
  }
}
