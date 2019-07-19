import { Component, OnInit } from '@angular/core';
import { GetImagesService } from '../get-images.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.page.html',
  styleUrls: ['./event-page.page.scss'],
})
export class EventPagePage implements OnInit {

  images;

  sliderConfig = {
  
    centeredSlides: false,
    slidesPerView: 2.5
  }
  constructor(private imgService :GetImagesService, private router : Router ) { }

  ngOnInit() {
    console.log(this.images);
    this.images = this.imgService.getImages();

  }

}
