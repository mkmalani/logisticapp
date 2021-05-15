import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutesRatesPageRoutingModule } from './routes-rates-routing.module';

import { RoutesRatesPage } from './routes-rates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutesRatesPageRoutingModule
  ],
  declarations: [RoutesRatesPage]
})
export class RoutesRatesPageModule {}
