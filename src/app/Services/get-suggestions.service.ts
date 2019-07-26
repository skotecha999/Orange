import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetSuggestionsService {

  data=[
    {
      title:"Zouk",
      categories: [{title: "Club"},{title: "Dancing"},{title:"Bar"}, {title:"Party"}],
      date: "Sat 27th July",
      multiple_days: true,
      address: "3C River Valley Road, Clarke Quay, #01-05 to #02-06, The Cannery, Singapore 179022",
      image: "../assets/img/p1.jpg",
    },
    {
      title:" IME Grand Launch",
      categories: [{title: "Fusion"},{title: "Music"}],
      date: "12th August",
      multiple_days: false,
      address: "IME Grounds, Brigade Millennium: Bengaluru ",
      image: "../assets/img/f1.jpg",
    },
    {
      title:"Concert",
      categories: [{title: "Performances"},{title: "Theatre"},{title:"Art"}],
      date: "Sun 04 Aug",
      multiple_days: true,
      address: "Bangalore International Centre: Bangalore",
      image: "../assets/img/p3.jpg",
    },
    {
      title:"Zouk",
      categories: [{title: "Club"},{title: "Dancing"},{title:"Bar"}, {title:"Party"}],
      date: "Sat 27th July",
      multiple_days: true,
      address: "3C River Valley Road, Clarke Quay, #01-05 to #02-06, The Cannery, Singapore 179022",
      image: "../assets/img/p1.jpg",
    },
    {
      title:" IME Grand Launch",
      categories: [{title: "Fusion"},{title: "Music"}],
      date: "12th August",
      multiple_days: false,
      address: "IME Grounds, Brigade Millennium: Bengaluru ",
      image: "../assets/img/f1.jpg",
    }

  ];



  constructor() { }

  similar(){
    return this.data;
  }

}
