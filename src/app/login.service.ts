import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  postCredentials(value:any){
      return this.httpClient.post("https://reqres.in/api/login",value)
  }
  constructor(private httpClient:HttpClient) { }
}
