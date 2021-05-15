import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewRatingPage } from './review-rating.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewRatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewRatingPageRoutingModule {}
