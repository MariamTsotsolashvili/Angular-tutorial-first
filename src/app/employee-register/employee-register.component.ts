import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import {trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        left: '600px'
      })),
      state('hide', style({
        left: '900px'
      })),
      transition('show <=> hide', [
        animate('0.2s')
      ])
    ])
  ]
})
export class EmployeeRegisterComponent implements OnInit {
  employeeregister;
  popCheck = false;
  visible = false;
  constructor(private formBuilder: FormBuilder, private employeesService: EmployeesService ) {
    this.employeeregister = formBuilder.group( {
      name: [''],
      salary: [''],
      age: ['']
    });
  }

  ngOnInit() {}
  sendInfo() {
    this.employeesService.addToEmployes(this.employeeregister.value);
  }
  popUp() {
    this.popCheck = !this.popCheck;
    this.visible = true;
  }
}
