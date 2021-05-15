import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-bids',
  templateUrl: './my-bids.page.html',
  styleUrls: ['./my-bids.page.scss'],
})
export class MyBidsPage implements OnInit {
  showEdit = true;
  showCorrect = false;
  data = [ { isEdit: true}, { isEdit: false}, { isEdit: false}];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigateByUrl('/home');
  }

  hideShowIcon(mode) {
    if (mode === 'Edit') {
      this.showEdit = false;
      this.showCorrect = true;
    } else if (mode === 'Correct') {
      this.showCorrect = false;
      this.showEdit = true;
    }
  }

}
