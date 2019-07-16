import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {
  employeeregister;
  popCheck = false;
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
  }
}
