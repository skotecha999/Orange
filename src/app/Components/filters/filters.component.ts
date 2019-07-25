import { Component ,ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltersPage } from 'src/app/Pages/filters/filters.page';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  dataReturned: any;
  constructor(public modalController: ModalController){}
  async openModal() {
    const modal = await this.modalController.create({
      component: FiltersPage,
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
  };
  
  

  


