import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-get-employee-info',
  templateUrl: './get-employee-info.component.html',
  styleUrls: ['./get-employee-info.component.css']
})
export class GetEmployeeInfoComponent implements OnInit {

  employee:Employee;
  
  message:any;

  show: boolean;

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.show = false;
  }

  public validate(employee)
  {
    
      var onlyNumberRegex = /^\d+$/;
      var empId = employee.empId;
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
    
    return true;
  }

  public getEmpInfo(){
      if(this.validate(this.employee))
      {
        let resp=this.service.getEmpInfo(this.employee.empId);
        resp.subscribe((data)=>{
        //alert('data - '+data);
        if(data!='null' && data!='undefined' && data!='' && data!=null)
        {
          this.employee = data;
          console.log(this.employee);
          document.getElementById("inputForm").hidden = true;
          document.getElementById("dataForm").hidden = false;
        }
        else{
          alert('No Records Found!');
          console.log('No Records Found');
          this.employee = new Employee();
          document.getElementById("inputForm").hidden = false;
          document.getElementById("dataForm").hidden = true;
        }
      });    
      }
  }

    public showPassword()
    {
      this.show = !this.show;
    }

}
