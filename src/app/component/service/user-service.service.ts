import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
getTokenApi:string="http://localhost:8082/auth/token"
getLoginApi:string="http://localhost:8082/auth/login"
  constructor(private http:HttpClient) { }
  getToken(username:any,password:any):Observable<any>{
return this.http.post<any>(this.getTokenApi,{
  "username":username,"password":password
})
  }
  getUserDetails(token:string):Observable<User>{
    return this.http.get<User>(this.getLoginApi,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    })
  }
}
