import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    console.log('getEmployees triggered');
    
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees)
  }

  add(): void {
    this.router.navigate(['/user']);
  }

  delete(employee: Employee): void {
    // code dibawah tidak otomatis reactive ???
    this.employees = this.employees.filter(e => e !== employee)
    this.employeeService.deleteEmployee(employee.id).subscribe()
  }
}