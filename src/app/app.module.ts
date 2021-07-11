import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';

import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    Ionic4DatepickerModule,
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StatusBar,
    SplashScreen,
    Keyboard
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
