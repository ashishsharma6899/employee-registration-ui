import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  public registerEmployee(employee)
  {
    return this.http.post("http://localhost:8080/emp/saveEmployeeInfo",employee,{responseType:'text' as 'json'});
  }

  public getEmpInfo(id) : Observable<any>
  {
    return this.http.get("http://localhost:8080/emp/getEmpInfo/"+id);
  }

}
