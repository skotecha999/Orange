import { Component, OnInit, ViewChild} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.page.html',
  styleUrls: ['./userhome.page.scss'],
  
})

export class UserhomePage implements OnInit {
  title='eventsvs';
  items= Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  ImageArray: any[];

  constructor(public navCtrl : NavController) { 
    this.ImageArray=[
      {'image' : '../assets/img/f1.jpg'},
      {'image' : '../assets/img/f2.jpg'},
      {'image' : '../assets/img/f3.jpg'},
      {'image' : '../assets/img/p1.jpg'},
      {'image' : '../assets/img/p2.jpg'},
      {'image' : '../assets/img/p3.jpg'},
      {'image' : '../assets/img/p4.jpg'},
    
    ]
  }
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    speed: 300
   };
  ngOnInit() {
  }

}

