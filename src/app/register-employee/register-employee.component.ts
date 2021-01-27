import { Component, OnInit } from '@angular/core';
import {EmployeeRegistrationServiceService} from '../employee-registration-service.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Employee } from '../employee';  

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  
  constructor(private employeeRegistrationService:EmployeeRegistrationServiceService) {
    
   }

  employee : Employee=new Employee();  
  submitted = false;  

  ngOnInit(): void {
    this.submitted=false;  
  }

  registerEmployeeForm=new FormGroup({  
    empId:new FormControl(),  
    empName:new FormControl(),
    phone:new FormControl(),
    empTeamName:new FormControl(),
    empEmailId:new FormControl('',[Validators.required,Validators.email]),
    empManagerName:new FormControl(),
    password:new FormControl(),
    confirmPassword:new FormControl()
  });  
  
  registerEmployee(registerEmployee){  
    this.employee=new Employee();
    this.employee.empId=this.EmployeeId.value; 
    this.employee.empName=this.EmployeeName.value; 
    this.employee.phone=this.EmployeePhone.value; 
    this.employee.empTeamName=this.EmployeeTeamName.value; 
    this.employee.empManagerName=this.EmployeeManagerName.value; 
    this.employee.empEmailId=this.EmployeeEmail.value; 
    this.employee.password=this.EmployeePassword.value; 
    this.employee.confirmPassword=this.EmployeeConfirmPassword.value; 
    this.submitted = true;  
    this.save();  
  }  

  save() {  
    this.employeeRegistrationService.registerEmployee(this.employee)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.employee = new Employee();  
  }  

  get EmployeeId(){  
    return this.registerEmployeeForm.get('emp_id');  
  }  
  
  get EmployeeName(){  
    return this.registerEmployeeForm.get('emp_name');  
  }  
  
  get EmployeePhone(){  
    return this.registerEmployeeForm.get('emp_phone');  
  }
  
  get EmployeeTeamName(){  
    return this.registerEmployeeForm.get('emp_team_name');  
  } 

  get EmployeeEmail(){  
    return this.registerEmployeeForm.get('employee_email');  
  } 

  get EmployeeManagerName(){  
    return this.registerEmployeeForm.get('emp_manager_name');  
  } 

  get EmployeePassword(){  
    return this.registerEmployeeForm.get('password');  
  } 

  get EmployeeConfirmPassword(){  
    return this.registerEmployeeForm.get('confirm_password');  
  } 

  registerEmpForm(){  
    this.submitted=false;  
    this.registerEmployeeForm.reset();  
  }  

}
