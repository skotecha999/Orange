import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { EventCardComponent } from 'src/app/Components/event-card/event-card.component';

import { IonicModule } from '@ionic/angular';

import { TestPage } from './test.page';

const routes: Routes = [
  {
    path: '',
    component: TestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestPage,EventCardComponent]
})
export class TestPageModule {}
