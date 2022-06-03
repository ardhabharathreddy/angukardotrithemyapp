import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from 'src/about/aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:"createemployee",component:CreateemployeeComponent},
    {path:"employee",component:EmployeeComponent},
    {path:"editemployee/:id",component:CreateemployeeComponent},
    {path:"employeedetails/:id",component:EmployeedetailsComponent},
    {path:"aboutus",component:AboutusComponent},
    {path:"parent",component:ParentComponent},
    {path:"contactus",loadChildren:()=>import('./contact/contact.module').then(m => m.ContactModule)},
    {path:"**",component:PagenotfoundComponent}
  ]},
  {path:"",component:LoginComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
