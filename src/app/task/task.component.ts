import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  checked;
  constructor(private formBuilder: FormBuilder) {
    this.checked = formBuilder.group({
      mail: ['', [Validators.email]],
      Password: ['', [Validators.minLength(7)]],
      ConfirmPassword: [''],
      Nickname: [''],
      PhoneNumber: [''],
      Website: ['']
  }, {validator: this.checkPasswords});
  }

  ngOnInit() { }

  checkPasswords(pass) {
  return pass.get('Password') !== pass.get('ConfirmPassword').value ? null : { notSame: true };
}
}
