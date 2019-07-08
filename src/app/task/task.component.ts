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
      name: ['', [Validators.minLength(2)]],
      Password: ['', [Validators.minLength(7)]],
      mail: ['', this.email()],
  });
  }

  ngOnInit() { }

  email() {
    return(formControl) => {
      return formControl.value.contains('@') ? {emailchecker: {invalid: false}} : null ;
    };
  }

}
