import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {PassImageService} from  '../../Services/pass-image.service'
import { GetEventService } from 'src/app/Services/get-event.service';
import { GetImagesService } from '../../Services/get-images.service';
import { GetSuggestionsService } from 'src/app/Services/get-suggestions.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.page.html',
  styleUrls: ['./event-page.page.scss'],
})


export class EventPagePage implements OnInit {

  images:  { value: string }[];
  image : { value: string };
  event: {
    title: string,
    description: string,
    attractions: string[],
  };
  suggestions: {
    title: string,
    categories: {title: string}[],
    date: string,
    multiple_days: boolean,
    address: string,
  } [];
  count: number;
  sliderConfig = {
    centeredSlides: false,
    slidesPerView: 2.5,
    spaceBetween: 0,
    slidesOffsetBefore: 5,
    slidesOffsetAfter: 10
  }

  joinConfig= {
    initialSlide:1,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 3,
    followFinger: false,
    shortSwipes: false,
    longSwipesRatio: 0.7,
    loop: true,
  }

  x = window.matchMedia("(min-width: 600px)");

  constructor(private imgService :GetImagesService, private router : Router, private myService: PassImageService, private eventService: GetEventService,private getsuggestions: GetSuggestionsService, public toastController: ToastController  ) {
    this.images = this.imgService.getImages();
    this.event = this.eventService.getEvent();
    this.suggestions= this.getsuggestions.similar();
    this.count= 1;
   }


  ngOnInit() {
    if(this.x.matches)
    {
      this.sliderConfig = {
        centeredSlides: false,
        slidesPerView: 3.5,
        spaceBetween: 5,
        slidesOffsetBefore: 10,
        slidesOffsetAfter: 15
      }
      this.joinConfig['longSwipesRatio']= 0.4;
    }
  }

 
openImage(img : {value:string}){
  this.image = img;
  this.myService.setImage(this.image)
  this.router.navigate(['image']);
}
  async join(){{
    const toast = await this.toastController.create({
      header: 'Succesful',
      message: 'Confirmed booking for you'+((this.count>1?  ' plus ' +(this.count-1)+' guest(s)' : ''))+ ' at '+  this.event.title +'.',
      position: 'middle',
      buttons: [
        
         {
          text: 'Done',
          role: 'cancel',
          handler: () => {
           
          }
        }
      ]
    });
    toast.present();
    this.router.navigate(['home']);
  }

  
}
clicked(){
  console.log("Open new Event");

}

}
