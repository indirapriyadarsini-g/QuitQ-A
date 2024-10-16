import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  


  signupApi = 'localhost:8083/auth/signup';
  // getuserApi='https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // signup(signupBody: User) : Observable<any>{
  //   return this.http.post(this.signupApi,signupBody);
  // }

  signup(username: any, password: any) : Observable<any> {
    return this.http.post<any>('http://localhost:8083/auth/signup', {
          "username": username,
          "password": password
      }) 
}
  // getUsers() : Observable<any>{
  //   return this.http.get(this.getuserApi);
  // }

  getToken(username: any, password: any) : Observable<any> {
      return this.http.post<any>('http://localhost:8083/auth/token', {
            "username": username,
            "password": password
        }) 
  }

  getUserDetails(token: string) : Observable<User>{
    return this.http.get<User>('http://localhost:8083/auth/login', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    })
  }

  isUserAutheticated(): boolean{
    let token = localStorage.getItem('token'); 
    return !token?false: true; 
  }
}
