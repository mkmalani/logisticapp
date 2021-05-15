import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewLoadPage } from './new-load.page';

const routes: Routes = [
  {
    path: '',
    component: NewLoadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewLoadPageRoutingModule {}
