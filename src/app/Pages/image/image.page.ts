import { Component, OnInit } from '@angular/core';
import {PassImageService} from  '../../Services/pass-image.service'

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage  implements OnInit {

  img: {value: string};

  constructor(myService: PassImageService) {
    this.img = myService.getImage();
    console.log("getting data");
  }
  
  ngOnInit() {
  }

}
