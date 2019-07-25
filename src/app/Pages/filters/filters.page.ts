
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { Router } from '@angular/router';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {

  
  selectOptions=['Below 2Km','Below 4Km'];
  sliderConfig = {
    centeredSlides: false,
    slidesPerView: 4,
    spaceBetween: 5,
    slidesOffsetBefore: 5,
    slidesOffsetAfter: 10
  }
  fab=[{ value:"../assets/img/name.png",label:"Event Name"},{ value:"../assets/img/distance.jpg",label:"Distance"},{ value:"../assets/img/Popularity.png",label:"Popularity"}];
  modalTitle:string;
  modelId:number;
 
  constructor(
    private modalController: ModalController,
    private navParams: NavParams, private router : Router
  ) { }
 
  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }
 
  async closeModal() {
    const onClosedData: string = "";
    await this.modalController.dismiss(onClosedData);
  }
  
  }

