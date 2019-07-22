import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetEventService {
  private data =  {title: "Zouk, Singapore", description:"One World. One Music. One Tribe. One Dance.  Striving to be the pacesetter in propelling Asia’s dance music scene forward and leading Singapore to the forefront of global clubbing culture by continuously pushing boundaries."} ;

  getEvent(){
    console.log("getEvent Called");
    return this.data;
  }
  
  constructor() { }
}
