import { Component, OnInit, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import {trigger, style, transition, animate} from '@angular/animations';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
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
