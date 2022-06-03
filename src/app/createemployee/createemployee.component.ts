import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  employeeForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      mobile:new FormControl(),
      email:new FormControl(),
      dob:new FormControl(),
      address:new FormGroup(
        {
          addressline:new FormControl(),
          city:new FormControl(),  
          state:new FormControl(),
          pincode:new FormControl(),      
        }
      ),
      education:new FormArray([
        new FormGroup(
          {
            qualification: new FormControl(),
            year:new FormControl(),
            percentage:new FormControl(),
          }
        ),
      ]),
      role:new FormControl(),
      id:new FormControl()
    }
  )
  get educationFormArray()
  {
    return this.employeeForm.get('education') as FormArray;
  }
  add(){
    this.educationFormArray.push(
      new FormGroup(
        {
          qualification: new FormControl(),
            year:new FormControl(),
            percentage:new FormControl(),
        }
      )
    )
  }
  delet(i:number){
    this.educationFormArray.removeAt(i);
  }
  submit(){
    if(this.detailsOfEmployee){
      this.employeeService.editEmployee(this.employeeForm.value).subscribe(
        (data:Employee[])=>{
          alert("edited")},
        (error:any)=>{alert("Failed to edit")}
      )
    }
     this.employeeService.postEmployees(this.employeeForm.value).subscribe(
       (data:Employee[])=>{alert("sent to employee service")},
       (error:any)=>{alert("cannot post vehicles to employee service")}
     )
  }
  detailsOfEmployee:any={};
  reqParms:any=null;
  constructor(private employeeService:EmployeeService,private activatedroute:ActivatedRoute) {
    this.activatedroute.params.subscribe(
      (data:any)=>{this.reqParms=data.id},
    )
    if(this.reqParms!=null)
    {
    this.activatedroute.params.subscribe(
      (data:any)=>{
        employeeService.getEmployeeById(data.id).subscribe(
          (data:any)=>{
            
            this.detailsOfEmployee=data
            this.employeeForm.patchValue(data);
          },
          (error:any)=>{alert("cannot get employee through id")}
        );
      },
      (error:any)=>{
        alert("cannot get employee id througt params");
      }
    )
    }
   }

  ngOnInit(): void {
    this.employeeForm.get('role')?.valueChanges.subscribe(
      (data:string)=>{if(data=='frontEnd'){
                      this.employeeForm.addControl('html',new FormControl());
                      this.employeeForm.addControl('angular',new FormControl());
                      this.employeeForm.addControl('css',new FormControl());
                      this.employeeForm.addControl('javascript',new FormControl());
                      this.employeeForm.removeControl('java');
                      this.employeeForm.removeControl('sql');
                      this.employeeForm.removeControl('expressJS');
                      this.employeeForm.removeControl('mongoDB');
                    }
                    else{
                      this.employeeForm.addControl('java',new FormControl());
                      this.employeeForm.addControl('sql',new FormControl());
                      this.employeeForm.addControl('expressJS',new FormControl());
                      this.employeeForm.addControl('mongoDB',new FormControl());
                      this.employeeForm.removeControl('html');
                      this.employeeForm.removeControl('angular');
                      this.employeeForm.removeControl('css');
                      this.employeeForm.removeControl('javascript');
                    }
                  }
    )
  }

}
