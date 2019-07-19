import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetImagesService {
private data = [
  {
    url :"..\assets\img\p1.jpg",
  },
  {
    url : "..\assets\img\p2.jpg",
  },
  {
    url :"..\assets\img\p3.jpg",
  },
  {
    url :"..\assets\img\p4.jpg",
  },{
    url :"..\assets\img\p3.jpg",
  },
  {
    url :"..\assets\img\p4.jpg",
  },{
    url :"..\assets\img\p3.jpg",
  },
  {
    url :"..\assets\img\p4.jpg",
  } 
];
  constructor() { }

  getImages(){
    
    return this.data;
  }
}
