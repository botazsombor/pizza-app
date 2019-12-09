import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  submitted = false;
  returnUrl: string;
  constructor(private userService: UserService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

  }
  login(){
    const msgBody = {
      userName: this.username,
      emailAddress: this.email,
      password: this.password
    }
    const token = this.username + ':' + this.password;
    const key = btoa(token);
    console.log(key);
    this.userService.loginUser(key, msgBody);

  }
}



