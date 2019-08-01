import { Component, OnInit } from '@angular/core';
import { GetSuggestionsService } from 'src/app/Services/get-suggestions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.page.html',
  styleUrls: ['./userhome.page.scss'],
})
export class UserhomePage implements OnInit {

  events: {
    title: string,
    categories: {title: string}[],
    date: string,
    multiple_days: boolean,
    address: string,
  } [];


  constructor(private getsuggestions: GetSuggestionsService, private router:Router) { 
    this.events= getsuggestions.similar();
  }
  clicked(){
    console.log("Open new Event");
    this.router.navigate(['event-page']);
  }
  
  ngOnInit() {
  }

}
