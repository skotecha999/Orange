import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

toHome()
{
  this.router.navigate(['userhome']);
}
toSignUp()
{
  this.router.navigate(['signuppage']);
}


}
