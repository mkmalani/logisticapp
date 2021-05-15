import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdStatusPage } from './od-status.page';

const routes: Routes = [
  {
    path: '',
    component: OdStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdStatusPageRoutingModule {}
