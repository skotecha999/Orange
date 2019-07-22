import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetEventService {
private data =  {title: "Zouk, Singapore", description:"details of the club"} ;
getEvent(){
  return this.data;
}
  constructor() { }
}
