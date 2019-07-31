import { NgModule } from '@angular/core';
import { EventCardComponent } from '../Components/event-card/event-card.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [EventCardComponent],
  exports: [EventCardComponent],
  imports:[CommonModule,
  IonicModule]
})
export class SharedModule { }
