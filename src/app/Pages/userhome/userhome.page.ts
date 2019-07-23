import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.page.html',
  styleUrls: ['./userhome.page.scss'],
  
})

export class UserhomePage implements OnInit {
  title='eventsvs';
  items= Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit() {
  }

}

