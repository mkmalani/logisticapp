import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdPaymentPage } from './od-payment.page';

const routes: Routes = [
  {
    path: '',
    component: OdPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdPaymentPageRoutingModule {}
