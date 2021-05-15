import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdNotesPageRoutingModule } from './od-notes-routing.module';

import { OdNotesPage } from './od-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdNotesPageRoutingModule
  ],
  exports: [
    OdNotesPage
  ],
  declarations: [OdNotesPage]
})
export class OdNotesPageModule {}
