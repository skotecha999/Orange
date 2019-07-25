import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassImageService {

  image : {value: string};


  setImage( img : {value: string}){
    this.image = img; 
   
  }

  getImage() {
    return this.image;
}
  constructor() { }
}
