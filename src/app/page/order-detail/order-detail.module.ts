import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetailPageRoutingModule } from './order-detail-routing.module';

import { OrderDetailPage } from './order-detail.page';
import { OdSummaryPageModule } from './od-summary/od-summary.module';
import { OdStatusPageModule } from './od-status/od-status.module';
import { OdChargesPageModule } from './od-charges/od-charges.module';
import { OdPaymentPageModule } from './od-payment/od-payment.module';
import { OdDocumentsPageModule } from './od-documents/od-documents.module';
import { OdNotesPageModule } from './od-notes/od-notes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailPageRoutingModule,
    OdSummaryPageModule,
    OdStatusPageModule,
    OdChargesPageModule,
    OdPaymentPageModule,
    OdDocumentsPageModule,
    OdNotesPageModule
  ],
  declarations: [OrderDetailPage]
})
export class OrderDetailPageModule { }
