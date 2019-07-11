import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
    this.loginForm = formBuilder.group( {
      Email: [''],
      Password: ['']
    });
  }

  ngOnInit() {
  }
  doSomething() {
    const spec = this.usersService.users.find(value => value.Email === this.email && value.Password === this.password);
    console.log(spec);
  }
  get email() {
    return this.loginForm.get('Email').value;
  }

  get password() {
    return this.loginForm.get('Password').value;
  }
}
