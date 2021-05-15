import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdDocumentsPageRoutingModule } from './od-documents-routing.module';

import { OdDocumentsPage } from './od-documents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdDocumentsPageRoutingModule
  ],
  exports: [
    OdDocumentsPage
  ],
  declarations: [OdDocumentsPage]
})
export class OdDocumentsPageModule {}
