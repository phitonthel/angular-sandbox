import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import components
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'

// import Router to navigate
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  // initialize
  employee?: Employee

  // activate route, location, and services
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getEmployee()
  }

  getEmployee() {
    const id = this.route.snapshot.paramMap.get('id')
    if (id !== null) {
      this.employeeService.getEmployee(Number(id))
        .subscribe(employee => this.employee = employee)
    }
  }

  delete(employee: Employee): void {
    console.log('delete on employee detail triggered');
    
    const id = Number(employee.id)
    this.employeeService.deleteEmployee(id)
      .subscribe()

    this.router.navigateByUrl('/employees')
  }

  edit(employee: Employee): void {
    console.log('edit on employee detail triggered');

    const id = Number(employee.id)
    this.router.navigateByUrl(`/edit-employee/${id}`)
  }

}
