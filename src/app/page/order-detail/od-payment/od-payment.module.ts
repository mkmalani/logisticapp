import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdPaymentPageRoutingModule } from './od-payment-routing.module';

import { OdPaymentPage } from './od-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdPaymentPageRoutingModule
  ],
  exports: [
    OdPaymentPage
  ],
  declarations: [OdPaymentPage]
})
export class OdPaymentPageModule {}
