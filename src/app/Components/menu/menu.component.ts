import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  selectedPath = '';
pages = [
    {
      title: 'Home',
    },
    {
      title: 'My Subscriptions'
    },
    {
      title: 'Settings',
    },
    {
      title: 'Help',
    }
  ];

  calender=['7-july','8-july','9-july'];

  constructor() { }

  ngOnInit() {}

}
