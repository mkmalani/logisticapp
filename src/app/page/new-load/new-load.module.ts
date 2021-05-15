import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewLoadPageRoutingModule } from './new-load-routing.module';

import { NewLoadPage } from './new-load.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewLoadPageRoutingModule
  ],
  declarations: [NewLoadPage]
})
export class NewLoadPageModule {}
