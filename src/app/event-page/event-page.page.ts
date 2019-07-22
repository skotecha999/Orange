import { Component, OnInit } from '@angular/core';
import { GetImagesService } from '../get-images.service';
import { Router } from '@angular/router';
import {PassImageService} from  '../pass-image.service'
import { GetEventService } from '../services/get-event.service';
  

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.page.html',
  styleUrls: ['./event-page.page.scss'],
})


export class EventPagePage implements OnInit {

  images:  { value: string }[];
  image : { value: string };
  sliderConfig = {
    centeredSlides: false,
    slidesPerView: 2.5,
    spaceBetween: 5,
    slidesOffsetBefore: 5,
    slidesOffsetAfter: 10
  }
  event: {title: string; description: string};

  x = window.matchMedia("(min-width: 600px)");

  constructor(private imgService :GetImagesService, private router : Router, private myService: PassImageService, private eventService: GetEventService ) { }


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
    this.images = this.imgService.getImages();
    console.log(this.images);
    this.event = this.eventService.getEvent();
    }
  }

 
openImage(img : {value:string}){
  this.image = img;
  
  this.myService.setImage(this.image)
  this.router.navigate(['image']);
}
}
