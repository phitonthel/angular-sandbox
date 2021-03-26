import { Component, OnInit } from '@angular/core';

// import Employee components
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'

// import Router to navigate
import {Router} from '@angular/router';

// sweet alert 2
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }

  add(): void {
    console.log('add works');
  }

  onSubmit(input: any): void {
    console.log('onSubmit works');
    console.log('employees=', this.employees);
    
    console.log(input);

    input.contactNumber = Number(input.contactNumber) // convert to number

    for (const key in input) {
      if (!input[key] && key!== 'lastName') {
        // alert('Invalid input!')
        Swal.fire({
          icon: 'error',
          title: 'Invalid input!',
          text: 'Please fill all the input form with a valid format'
        })
        return
      }
    }

    this.employeeService.addEmployee(input as Employee)
      .subscribe()

    this.router.navigateByUrl('/employees')
  }

}
