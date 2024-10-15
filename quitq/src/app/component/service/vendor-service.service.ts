import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  constructor(private http:HttpClient) { }
  addVendor(obj:any):Observable<any>{
    return this.http.post('http://localhost:8082/vendor/add',obj)
}
getVendor():Observable<any>{
  return this.http.get<any>('http://localhost:8082/vendor/get',{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
updateVendor(obj:any):Observable<any>{
  console.log(localStorage.getItem('token'))
  return this.http.put('http://localhost:8082/vendor/update',obj,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
deleteVendor():Observable<any>{
  return this.http.delete('http://localhost:8082/vendor/delete',{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
}
