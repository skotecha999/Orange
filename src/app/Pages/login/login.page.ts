import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
val:number;
  constructor(private router: Router) { }

  ngOnInit() {
  }

toHome()
{
  if(this.val==0){
    this.router.navigate(['orghome']);
  }
  else{
    this.router.navigate(['userhome']);
  }
 

}
toSignUp()
{
  this.router.navigate(['signuppage']);
}


}
