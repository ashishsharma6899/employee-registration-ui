import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationServiceService {

  private baseUrl = 'http://localhost:8080/emp/';

  constructor(private http:HttpClient) { }

  registerEmployee(employee: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'/saveEmployeeInfo', employee);  
  }

  getEmployee(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/getEmployeeInfo/${id}`);  
  }

}
