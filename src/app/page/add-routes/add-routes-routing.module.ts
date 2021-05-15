import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRoutesPage } from './add-routes.page';

const routes: Routes = [
  {
    path: '',
    component: AddRoutesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRoutesPageRoutingModule {}
