import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdSummaryPage } from './od-summary.page';

const routes: Routes = [
  {
    path: '',
    component: OdSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdSummaryPageRoutingModule {}
