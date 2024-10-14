import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorAddressServiceService {

  constructor(private http:HttpClient) { }
  addAddress(obj:any):Observable<any>{
    return this.http.post('http://localhost:8082/vendor/address/add',obj,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    }

    )
  }
  allAddresses():Observable<any>{
    return this.http.get('http://localhost:8082/vendor/address/all',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  updateStatus(id:any,status:any):Observable<any>{
    return this.http.put('http://localhost:8082/vendor/address/changeStatus/'+id+'/'+status,null,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  deleteAddress(id:any):Observable<any>{
    return this.http.delete('http://localhost:8082/vendor/address/delete/'+id,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
}
