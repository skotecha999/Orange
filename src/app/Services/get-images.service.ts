import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetImagesService {
  private data = [
    {value: "../assets/img/p1.jpg"},
    {value: "../assets/img/p2.jpg"},
    {value: "../assets/img/p3.jpg"}, 
    {value: "../assets/img/p4.jpg"}, 
    {value: "../assets/img/p1.jpg"}, 
    {value: "../assets/img/p2.jpg"},
    {value: "../assets/img/p3.jpg"}, 
    {value: "../assets/img/p4.jpg"}
];

  constructor() { }

  getImages(){
    console.log("getimages Called");
    return this.data;
  }
}
