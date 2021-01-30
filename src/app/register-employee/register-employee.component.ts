import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  employee:Employee = new Employee();
  
  message:any;

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
  
  }

  public registerNow(){
    if(this.validate(this.employee))
    {
      let resp=this.service.registerEmployee(this.employee);
      resp.subscribe((data)=> {
          this.message=data
          alert(this.message);
          this.employee = new Employee();
      });
      
    }
     
  }

  public validate(employee)
  {
    var empId = employee.empId;
    var empName = employee.empName;
    var empEmail = employee.email;
    var mobile = employee.empPhone;
    var teamName = employee.empTeamName;
    var managerName = employee.empManagerName;
    var password = employee.password;
    var confirmPassword = employee.confirmPassword;
    var characterRegex = /^[a-zA-Z\s]+$/;
    var onlyNumberRegex = /^\d+$/;
    var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(empId==null || empId=='')
    {
      alert('Please Enter your Employee Id!');
      document.getElementById("empId").nodeValue='';
      document.getElementById("empId").focus();
      return false;
    }
    else if(!onlyNumberRegex.test(empId))
    {
      alert('Employee Id should be in digits only!');
      document.getElementById("empId").focus();
      return false;
    }
    else if(empName==null || empName=='')
    {
      alert('Please Enter your Name!');
      document.getElementById("empName").focus();
      return false;
    }
    else if(!characterRegex.test(empName))
		{
      alert('Name is not valid, Name should be in alphabets only!');
      document.getElementById("empName").nodeValue=' ';
      document.getElementById("empName").focus();
			return false;
		}
    else if(empEmail==null || empEmail=='')
    {
      alert('Please Enter your Email Id!');
      document.getElementById("email").focus();
      return false;
    }
    else if(!validEmailRegex.test(empEmail))
    {
      alert('Please Enter valid Email Id!');
      document.getElementById("email").focus();
      return false;
    }
    else if(mobile==null || mobile=='')
    {
      alert('Please Enter your Phone Number!');
      document.getElementById("empPhone").focus();
      return false;
    }
    else if(!onlyNumberRegex.test(mobile))
    {
      alert('Please Enter valid Mobile Number!');
      document.getElementById("empPhone").focus();
      return false;
    }
    else if(teamName==null || teamName=='')
    {
      alert('Please Enter Team Name!');
      document.getElementById("empTeamName").focus();
      return false;
    }
    else if(managerName==null || managerName=='')
    {
      alert('Please Enter Your Manager Name!');
      document.getElementById("empManagerName").focus();
      return false;
    }
    else if(!characterRegex.test(managerName))
		{
      alert('Manager Name is not valid, It should be in alphabets only!');
      document.getElementById("empManagerName").nodeValue=' ';
      document.getElementById("empManagerName").focus();
			return false;
    }
    else if(password==null || password=='')
    {
      alert('Please Enter Password!');
      document.getElementById("password").focus();
      return false;
    }
    else if(confirmPassword==null || confirmPassword=='')
    {
      alert('Please Enter Confirm Password!');
      document.getElementById("confirmPassword").focus();
      return false;
    }
    else if(confirmPassword!=password)
    {
      alert('Password and Confirm Password is not macthed, Please enter again!');
      document.getElementById("password").nodeValue=' ';
      document.getElementById("confirmPassword").nodeValue=' ';
      document.getElementById("password").focus();
      return false;
    }
    return true;
  }

}
