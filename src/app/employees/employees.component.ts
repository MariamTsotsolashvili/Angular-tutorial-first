import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';


@Component({
 selector: 'app-employees',
 templateUrl: './employees.component.html',
 styleUrls: ['./employees.component.scss'],
 animations: []
})
export class EmployeesComponent implements OnInit {
 employees;
 isLoaded = false;
 myModal = false;
 constructor(private employeesService: EmployeesService ) { }

 ngOnInit() {
   this.employees = this.employeesService.getEmployees();
 }
}
