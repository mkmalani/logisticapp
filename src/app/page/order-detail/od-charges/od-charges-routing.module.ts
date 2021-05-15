import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdChargesPage } from './od-charges.page';

const routes: Routes = [
  {
    path: '',
    component: OdChargesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdChargesPageRoutingModule {}
