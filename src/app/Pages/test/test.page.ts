import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {


  event={
    title:"Zouk",
    categories: [{title: "Club"},{title: "Dancing"},{title:"Bar"}, {title:"Party"}],
    date: "Sat 27th July",
    multiple_days: true,
    address: "3C River Valley Road, Clarke Quay, #01-05 to #02-06, The Cannery, Singapore 179022",
    image: "../assets/img/p1.jpg",
  }


  constructor() {
    
   }

  ngOnInit() {
  }

}
