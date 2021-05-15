import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-load',
  templateUrl: './new-load.page.html',
  styleUrls: ['./new-load.page.scss'],
})
export class NewLoadPage implements OnInit {

  isLoadType = false;
  isInsurance = false;
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }
  
  navigate() {
    this.modalController.dismiss();
  }

}
