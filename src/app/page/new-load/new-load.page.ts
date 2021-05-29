import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Ionic4DatepickerModalComponent } from '@logisticinfotech/ionic4-datepicker';
import * as moment from 'moment';
@Component({
  selector: 'app-new-load',
  templateUrl: './new-load.page.html',
  styleUrls: ['./new-load.page.scss'],
})
export class NewLoadPage implements OnInit {

  isLoadType = false;
  isInsurance = false;
  selectDate = moment(new Date()).format("DD-MM-YYYY");
  datePickerObj: any = {
    inputDate: new Date(),
    fromDate: null,
    toDate: new Date('2070-12-31'),
    showTodayButton: false,
    showCloseButton: false,
    closeOnSelect: true,
    mondayFirst: true,
    setLabel: 'Set',
    todayLabel: '',
    closeLabel: '',
    monthsList: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    weeksList: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    dateFormat: 'DD-MM-YYYY',
    clearButton: false,
    momentLocale: 'en-US',
    yearInAscending: true,
    btnCloseSetInReverse: true,
    btnProperties: {
      expand: 'block',
      fill: '',
      size: '',
      disabled: '',
      strong: '',
      color: ''
    }
  };

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  navigate() {
    this.modalController.dismiss();
  }
  async openDatePicker() {
    const datePickerModal = await this.modalController.create({
      component: Ionic4DatepickerModalComponent,
      cssClass: 'li-ionic4-datePicker',
      componentProps: {
        objConfig: this.datePickerObj,
        selectedDate: this.selectDate
      }
    });
    await datePickerModal.present();
    datePickerModal.onDidDismiss()
      .then(async (res) => {
        console.log(res);
        if (res && res.data && res.data.date) {
          this.selectDate = res.data.date;
        }
      })
  }
}
