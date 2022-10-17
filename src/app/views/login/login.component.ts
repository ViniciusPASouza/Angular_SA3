import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new User ();

  receberDados(){
    console.log(this.userModel);
  }
}
