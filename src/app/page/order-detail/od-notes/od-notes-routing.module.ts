import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdNotesPage } from './od-notes.page';

const routes: Routes = [
  {
    path: '',
    component: OdNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdNotesPageRoutingModule {}
