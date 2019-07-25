import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {

  @Input() data: {
    title: string,
    categories: {title: string}[],
    date: string;
    multiple_days: boolean;
    address: string;
  }
  constructor() {
   
   }

  ngOnInit() {
 
  }

}
