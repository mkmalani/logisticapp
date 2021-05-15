import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesRatesPage } from './routes-rates.page';

const routes: Routes = [
  {
    path: '',
    component: RoutesRatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesRatesPageRoutingModule {}
