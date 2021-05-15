import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDetailPage } from './order-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OrderDetailPage
  },
  {
    path: 'od-summary',
    loadChildren: () => import('./od-summary/od-summary.module').then( m => m.OdSummaryPageModule)
  },
  {
    path: 'od-status',
    loadChildren: () => import('./od-status/od-status.module').then( m => m.OdStatusPageModule)
  },
  {
    path: 'od-charges',
    loadChildren: () => import('./od-charges/od-charges.module').then( m => m.OdChargesPageModule)
  },
  {
    path: 'od-payment',
    loadChildren: () => import('./od-payment/od-payment.module').then( m => m.OdPaymentPageModule)
  },
  {
    path: 'od-documents',
    loadChildren: () => import('./od-documents/od-documents.module').then( m => m.OdDocumentsPageModule)
  },
  {
    path: 'od-notes',
    loadChildren: () => import('./od-notes/od-notes.module').then( m => m.OdNotesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDetailPageRoutingModule {}
