import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdSummaryPageRoutingModule } from './od-summary-routing.module';

import { OdSummaryPage } from './od-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdSummaryPageRoutingModule
  ],
  exports: [
    OdSummaryPage
  ],
  declarations: [OdSummaryPage]
})
export class OdSummaryPageModule {}
