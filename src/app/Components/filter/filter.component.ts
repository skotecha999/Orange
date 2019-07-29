import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterpagePage } from 'src/app/Pages/filterpage/filterpage.page';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  dataReturned: any;
  constructor(public modalController: ModalController){}
  async openModal() {
    const modal = await this.modalController.create({
      component: FilterpagePage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }


  ngOnInit() {}

}


  

  


