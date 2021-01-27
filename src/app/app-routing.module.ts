import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'getEmployeeInfo', pathMatch: 'full' },  
  { path: 'saveEmployeeInfo', component: RegisterEmployeeComponent },
  { path: 'getEmployeeInfo', component: GetEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
