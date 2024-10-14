import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http:HttpClient) { }
  showOrderedProductByStatus(status:string):Observable<any>{
    return this.http.get<any>('http://localhost:8082/orderproduct/vendor/product/details/'+status,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  showReturnProduct():Observable<any>{
    return this.http.get<any>('http://localhost:8082/orderproduct/vendor/returnOrder',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  showExchangeProduct():Observable<any>{
    return this.http.get<any>('http://localhost:8082/orderproduct/vendor/exchangeOrder',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  getOrderProductStats():Observable<any>{
    return this.http.get<any>('http://localhost:8082/orderproduct/vendor/orderProductStats',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  getOrderProductStatsMonth():Observable<any>{
    return this.http.get<any>('http://localhost:8082/orderproduct/vendor/orderProductStats/month',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  getNoOfOrderReceivedMonth():Observable<any>{
    return this.http.get<any>('http://localhost:8082/orderproduct/vendor/getNoOfOrdersReceived/month',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  getNoOfOrdersReceivedDate():Observable<any>{
    return this.http.get<any>('http://localhost:8082/orderproduct/vendor/getNoOfOrderReceived/date',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  getSalesMonth():Observable<any>{
    return this.http.get<any>('http://localhost:8082/orderproduct/vendor/sales/month',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  getSalesDate():Observable<any>{
    return this.http.get<any>('http://localhost:8082/orderproduct/vendor/sale/date',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
}
