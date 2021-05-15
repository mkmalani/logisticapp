import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewLoadPage } from '../new-load/new-load.page';
import { ReviewRatingPage } from '../review-rating/review-rating.page';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.page.html',
  styleUrls: ['./booking-history.page.scss'],
})
export class BookingHistoryPage implements OnInit {
  activeTab = 'pending';
  constructor(
    public modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  changeTab(tab) {
    this.activeTab = tab;
  }

  goToNotification() {
    this.router.navigate(['notification']);
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: NewLoadPage,
      cssClass: 'my-newload-modal'
    });
    return await modal.present();
  }

  async openRating() {
    const modal = await this.modalController.create({
      component: ReviewRatingPage,
      cssClass: 'my-rating-modal'
    });
    return await modal.present();
  }

}
