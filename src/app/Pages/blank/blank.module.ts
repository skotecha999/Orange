import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../../Components/menu/menu.component';

import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from 'ionic-selectable';
import { BlankPage } from './blank.page';
import { FiltersComponent } from 'src/app/Components/filters/filters.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: BlankPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlankPage,MenuComponent,FiltersComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlankPageModule {}
