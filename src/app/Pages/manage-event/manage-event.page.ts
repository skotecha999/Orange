import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GetImagesService } from 'src/app/Services/get-images.service';
import { Router } from '@angular/router';
import { PassImageService } from 'src/app/Services/pass-image.service';
import { GetEventService } from 'src/app/Services/get-event.service';
import { GetSuggestionsService } from 'src/app/Services/get-suggestions.service';
import { ToastController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.page.html',
  styleUrls: ['./manage-event.page.scss'],
})
export class ManageEventPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  images:  { value: string }[];
  image : { value: string };
  event: {
    title: string,
    description: string,
    attractions: string[],
  };

  sliderConfig = {
    centeredSlides: false,
    slidesPerView: 2.5,
    spaceBetween: 0,
    slidesOffsetBefore: 5,
    slidesOffsetAfter: 10
  }

  x = window.matchMedia("(min-width: 600px)");

  constructor(private imgService :GetImagesService, private router : Router, private myService: PassImageService, private eventService: GetEventService,private getsuggestions: GetSuggestionsService, public toastController: ToastController  ) {
    this.images = this.imgService.getImages();
    this.event = this.eventService.getEvent();
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
      };
    }
  }
  openImage(img : {value:string}){
    this.image = img;
    this.myService.setImage(this.image)
    this.router.navigate(['image']);
  }
  delete(i:number){
    this.images.splice(i,1);
    this.slides.update();
  }

  
}
