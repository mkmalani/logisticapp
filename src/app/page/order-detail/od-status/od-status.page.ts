import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-od-status',
  templateUrl: './od-status.page.html',
  styleUrls: ['./od-status.page.scss'],
})
export class OdStatusPage implements OnInit {
  activeTab = 'loading';
  activeStep = 1;
  constructor() { }

  ngOnInit() {
  }

  changeTab(tab) {
    this.activeTab = tab;
  }

  changeStep(step) {
    this.activeStep = step;
  }

}
