import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventPagePage } from './event-page.page';
import { EventCardComponent } from 'src/app/Components/event-card/event-card.component';

const routes: Routes = [
  {
    path: '',
    component: EventPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EventPagePage,EventCardComponent]
})
export class EventPagePageModule {}
