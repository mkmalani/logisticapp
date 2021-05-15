import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdChargesPageRoutingModule } from './od-charges-routing.module';

import { OdChargesPage } from './od-charges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdChargesPageRoutingModule
  ],
  exports: [
    OdChargesPage
  ],
  declarations: [OdChargesPage]
})
export class OdChargesPageModule {}
