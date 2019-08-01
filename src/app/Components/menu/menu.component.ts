import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  selectedPath = '';
pages = [
    {
      title: 'Home',
    },
      ];

  calendar=['7-july','8-july','9-july'];

  constructor(private router: Router) { }

toLogin(){
  this.router.navigate(['login']);
}
  ngOnInit() {}

}
