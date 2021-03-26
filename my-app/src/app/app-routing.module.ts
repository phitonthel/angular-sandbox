import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// Employees
import { EmployeesComponent } from './employees/employees.component'
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'
import { EmployeeAddComponent } from './employee-add/employee-add.component'
import { EmployeeEditComponent } from './employee-edit/employee-edit.component'

// Misc
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'employees', component: EmployeesComponent},
  { path: 'detail-employee/:id', component: EmployeeDetailComponent},
  { path: 'add-employee', component: EmployeeAddComponent},
  { path: 'edit-employee/:id', component: EmployeeEditComponent},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}