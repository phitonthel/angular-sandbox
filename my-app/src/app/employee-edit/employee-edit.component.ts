import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import components
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'

// import Router to navigate
import {Router} from '@angular/router';

// sweet alert 2
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
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

  edit(): void {
    console.log('edit on employee detail triggered');
    console.log('edited data=', this.employee);

    let payload:any = this.employee
    for (const key in payload) {
      if (!payload[key] && key !== 'lastName') {
        Swal.fire({
          icon: 'error',
          title: 'Invalid input!',
          text: 'Please fill all the input form with a valid format'
        })
        return
      }
    }

    this.employeeService.updateEmployee(this.employee as Employee)
      .subscribe()

    this.router.navigateByUrl(`/employees`)
  }

  cancel(): void {
    this.router.navigateByUrl(`detail-employee/${this.employee?.id}`)
  }

}

