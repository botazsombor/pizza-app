import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor() {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

  }
  login(){
    console.log(this.username);
  }
}



