import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { UserhomePage } from './userhome.page';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { FilterComponent } from 'src/app/Components/filter/filter.component';
import { FilterpagePage } from '../filterpage/filterpage.page';


const routes: Routes = [
  {
    path: '',
    component: UserhomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ScrollDispatchModule
  ],
  declarations: [UserhomePage, FilterComponent, FilterpagePage],
  entryComponents: [FilterpagePage]
})
export class UserhomePageModule {}


