import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Employee } from './employee';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employeesUrl = 'api/employees';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>(operation ='operation', result?:T ) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      return of(result as T)
    }
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        catchError(this.handleError<Employee[]>('getEmployees', []))
      );
  }

  /** GET employee by id. Will 404 if id not found */
  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      catchError(this.handleError<Employee>(`get Employee id=${id}`))
    );
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl, employee, this.httpOptions).pipe(
      catchError(this.handleError<any>(`update Employee`))
    )
  }

  addEmployee(employee: Employee): Observable<Employee> {
    console.log('addEmployee in employee.service triggered!', employee);
    
    return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions).pipe(
      catchError(this.handleError<Employee>('add Employee'))
    )
  }

  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`
    const url2 = `test`

    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      catchError(this.handleError<Employee>('delete Employee'))
    )
  }
}