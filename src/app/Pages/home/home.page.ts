import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  toFeatures(){
    this.router.navigate(['features']);
  }
  toEvent(){
    this.router.navigate(['event-page']);
  }
    
  toLogin(){
    this.router.navigate(['login']);
  }
  toManagePage(){
    this.router.navigate(['manage-event'])
  }
  
}
