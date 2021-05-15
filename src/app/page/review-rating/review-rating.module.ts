import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewRatingPageRoutingModule } from './review-rating-routing.module';

import { ReviewRatingPage } from './review-rating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewRatingPageRoutingModule
  ],
  declarations: [ReviewRatingPage]
})
export class ReviewRatingPageModule {}
