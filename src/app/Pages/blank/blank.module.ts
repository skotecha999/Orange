import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../../Components/menu/menu.component';

import { IonicModule } from '@ionic/angular';

import { BlankPage } from './blank.page';
import { FiltersComponent } from 'src/app/Components/filters/filters.component';

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
    RouterModule.forChild(routes)
  ],
  declarations: [BlankPage,MenuComponent,FiltersComponent]
})
export class BlankPageModule {}
