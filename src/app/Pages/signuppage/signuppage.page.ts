import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.page.html',
  styleUrls: ['./signuppage.page.scss'],
})
export class SignuppagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toLogin()
  {
    this.router.navigate(['login']);
  }
}
