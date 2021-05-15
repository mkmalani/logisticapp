import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBidsPage } from './my-bids.page';

const routes: Routes = [
  {
    path: '',
    component: MyBidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBidsPageRoutingModule {}
