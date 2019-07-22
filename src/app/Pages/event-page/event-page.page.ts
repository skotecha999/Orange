import { Component, OnInit } from '@angular/core';
import { GetImagesService } from '../../Sevices/get-images.service';
import { Router } from '@angular/router';
import {PassImageService} from  '../../Sevices/pass-image.service'
  

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.page.html',
  styleUrls: ['./event-page.page.scss'],
})


export class EventPagePage implements OnInit {

  images = [{ value:"../assets/img/p1.jpg"},{value: "../assets/img/p2.jpg"},{value:"../assets/img/p3.jpg"}, {value:"../assets/img/p4.jpg"}, {value:"../assets/img/p1.jpg"}, {value:"../assets/img/p2.jpg"},{value:"../assets/img/p3.jpg"}, {value:"../assets/img/p4.jpg"}];
  image : {value:string};
  sliderConfig = {
    centeredSlides: false,
    slidesPerView: 2.5,
    spaceBetween: 5,
    slidesOffsetBefore: 5,
    slidesOffsetAfter: 10
  }
  x = window.matchMedia("(min-width: 600px)");

  constructor(private imgService :GetImagesService, private router : Router, private myService: PassImageService ) { }


  ngOnInit() {
    if(this.x.matches)
    {
      this.sliderConfig = {
        centeredSlides: false,
        slidesPerView: 3.5,
        spaceBetween: 10,
        slidesOffsetBefore: 10,
        slidesOffsetAfter: 15
      }
    }
  }

 
openImage(img : {value:string}){
  this.image = img;
  
  this.myService.setImage(this.image)
  this.router.navigate(['image']);
}
}