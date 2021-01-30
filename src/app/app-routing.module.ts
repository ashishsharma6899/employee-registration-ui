import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetEmployeeInfoComponent } from './get-employee-info/get-employee-info.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
   {path:"register",component:RegisterEmployeeComponent},
   {path:"search",component:GetEmployeeInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
