import { Component, OnInit } from '@angular/core';
import { GetSuggestionsService } from 'src/app/Services/get-suggestions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orghome',
  templateUrl: './orghome.page.html',
  styleUrls: ['./orghome.page.scss'],
})
export class OrghomePage implements OnInit {

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
