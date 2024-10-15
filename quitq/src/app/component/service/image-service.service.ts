import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private http:HttpClient) { }
  addImage(data:any,id:number,status:boolean):Observable<any>{
    console.log(data)
    return this.http.post('http://localhost:8082/image/add/'+id+'/'+status,data,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  viewImage(id:number):Observable<any>{
    return this.http.get('http://localhost:8082/image/getAll/'+id,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  viewParticularImage(id:number):Observable<any>{
    return this.http.get('http://localhost:8082/image/getSpecificImage/'+id,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  upDateImage(id:number):Observable<any>{
    return this.http.put('http://localhost:8082/image/update/'+id,null,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  deleteImage(id:number):Observable<any>{
    return this.http.delete('http://localhost:8082/image/deleteSpecificImage/'+id,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  deleteAllImage(id:number):Observable<any>{
    return this.http.delete('http://localhost:8082/image/deleteAllImage/'+id,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  getOneImageOfProduct(id:number):Observable<any>{
    return this.http.get('http://localhost:8082/image/getOneImage/'+id,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  
}
