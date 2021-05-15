import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdDocumentsPage } from './od-documents.page';

const routes: Routes = [
  {
    path: '',
    component: OdDocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdDocumentsPageRoutingModule {}
