import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdStatusPageRoutingModule } from './od-status-routing.module';

import { OdStatusPage } from './od-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdStatusPageRoutingModule
  ],
  exports: [
    OdStatusPage
  ],
  declarations: [OdStatusPage]
})
export class OdStatusPageModule {}
