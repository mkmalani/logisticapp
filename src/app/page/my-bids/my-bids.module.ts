import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBidsPageRoutingModule } from './my-bids-routing.module';

import { MyBidsPage } from './my-bids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBidsPageRoutingModule
  ],
  declarations: [MyBidsPage]
})
export class MyBidsPageModule {}
