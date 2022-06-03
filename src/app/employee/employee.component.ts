import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Employee[]=[];
  order:any="";
  filterBy:any="";
  sort:string="";
  filter(){
    this.employeeService.getFilteredRows(this.filterBy,this.sort,this.order).subscribe(
      (data:Employee[])=>{this.employees=data},
      (error:any)=>{alert("cannot fetch employees data from Employee service")}
    )
  }
  edit(id:number){
    this.router.navigateByUrl("/dashboard/editemployee/"+id)
  }
  view(id:number){
    this.router.navigateByUrl("/dashboard/employeedetails/"+id)
  }
  delete(id:number){
    this.employeeService.deletEmployee(id).subscribe(
      (data:Employee[])=>{alert("deleted")},
      (error:any)=>{alert("Cannot delete selected item")}
    )
  }
  page(id:number,length:number){
    this.employeeService.getPagination(id,length).subscribe(
      (data:Employee[])=>{this.employees=data},
      (error:any)=>{alert("cannot fetch employees data from Employee service")}
    )
  }
  arrayLength:number=(this.employees.length)-90;
  constructor(private employeeService:EmployeeService,private router:Router) {
    this.employeeService.getEmpolyees().subscribe(
      (data:Employee[])=>{this.employees=data},
      (error:any)=>{alert("cannot fetch employees data from Employee service")}
    )
   }

  ngOnInit(): void {
  }

}
