import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login(){
    const msgBody = {
      userName: this.username,
      emailAddress: this.email,
      password: this.password
    }
    this.userService.register(msgBody);

  }

}
