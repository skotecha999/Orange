import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {PassImageService} from  '../../Services/pass-image.service'
import { GetEventService } from 'src/app/Services/get-event.service';
import { GetImagesService } from '../../Services/get-images.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.page.html',
  styleUrls: ['./event-page.page.scss'],
})


export class EventPagePage implements OnInit {

  images:  { value: string }[];
  image : { value: string };
  event: {title: string; description: string};
  sliderConfig = {
    centeredSlides: false,
    slidesPerView: 2.5,
    spaceBetween: 5,
    slidesOffsetBefore: 5,
    slidesOffsetAfter: 10
  }


  x = window.matchMedia("(min-width: 600px)");

  constructor(private imgService :GetImagesService, private router : Router, private myService: PassImageService, private eventService: GetEventService ) {
    this.images = this.imgService.getImages();
     this.event = this.eventService.getEvent();
   }


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
