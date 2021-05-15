import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRoutesPageRoutingModule } from './add-routes-routing.module';

import { AddRoutesPage } from './add-routes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRoutesPageRoutingModule
  ],
  declarations: [AddRoutesPage]
})
export class AddRoutesPageModule {}
