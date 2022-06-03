import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmpolyees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>("https://6222413b666291106a21d80b.mockapi.io/employees");
  }
  postEmployees(value:any):Observable<Employee[]>{
    return this.httpClient.post<Employee[]>("https://6222413b666291106a21d80b.mockapi.io/employees",value);
  }
  deletEmployee(id:number):Observable<Employee[]>{
    return this.httpClient.delete<Employee[]>("https://6222413b666291106a21d80b.mockapi.io/employees"+"/"+id)
  }
  getEmployeeById(id:number){
    return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees"+"/"+id);
  }
  getPagination(id:any,length:any):Observable<Employee[]>{
    return this.httpClient.get<Employee[]>("https://6222413b666291106a21d80b.mockapi.io/employees"+'?page='+id+'&limit='+length);
  }
  getFilteredRows(filterBy:string,sort:string,order:string):Observable<Employee[]>{
    return this.httpClient.get<Employee[]>("https://6222413b666291106a21d80b.mockapi.io/employees?filter"+filterBy+"&sortBy="+sort+"&order="+order);
  }
  editEmployee(employee:any):Observable<Employee[]>{
    return this.httpClient.put<Employee[]>("https://6222413b666291106a21d80b.mockapi.io/employees"+"/"+employee.id,employee);
  }
  constructor(private httpClient:HttpClient) { }
}
