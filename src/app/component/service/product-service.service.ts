import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

categoryApi:string="http://localhost:8082/vendor/getAllCategory"
addProductApi:string="http://localhost:8082/product/add"
  constructor(private http:HttpClient) { }
  getAllProduct(pageNumber:number,pageSize:number):Observable<any>{
   return  this.http.get<any>('http://localhost:8082/product/vendor?page='+pageNumber+'&size='+pageSize,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  getAllCategory(token:string):Observable<any>{
    return this.http.get<any>(this.categoryApi,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    }

    )
  }
  addProduct(obj:any):Observable<any>{
    return this.http.post(this.addProductApi,obj,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    }
)
  }
  viewOrderedProduct(page:number,size:number):Observable<any>{
    return this.http.get<any>('http://localhost:8082/orderproduct/vendor/getAll?page='+page+"&size="+size,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  viewUnOrderedProduct():Observable<any>{
    return this.http.get<any>('http://localhost:8082/orderproduct/vendor/getAllUnordered',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  orderProductDetail():Observable<any>{
    return this.http.get<any>('http://localhost:8082/orderproduct/vendor/product/details',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
}
