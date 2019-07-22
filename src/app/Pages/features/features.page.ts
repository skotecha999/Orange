import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.page.html',
  styleUrls: ['./features.page.scss'],
})
export class FeaturesPage implements OnInit {
 

  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  finish(){
    this.router.navigate(['home'])
  }
}
