import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employee:any=[];
  viewPrev(id:string){
   this.router.navigateByUrl("/dashboard/employeedetails"+"/"+(parseInt(id)-1));
  }
  viewNext(id:string){
    this.router.navigateByUrl("/dashboard/employeedetails"+"/"+(parseInt(id)+1));
  }
  constructor(private activatedRoute:ActivatedRoute,private employeeService:EmployeeService,private router:Router) {
    this.activatedRoute.params.subscribe(
      (data:any)=>{this.employeeService.getEmployeeById(data.id).subscribe(
        (data:any)=>{this.employee=data},
        (error:any)=>{alert("cannot get employee details")}
      )}
    )
   }

  ngOnInit(): void {
  }

}
