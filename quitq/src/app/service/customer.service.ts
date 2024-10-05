import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  

  constructor(private http: HttpClient) { }

  getAllProductApi = 'http://localhost:8083/customer/view-all-product'

  getAllProducts() : Observable<any>{
    return this.http.get(this.getAllProductApi);
  }

  getCartProductApi = 'http://localhost:8083/customer/view-my-cart'
  getCartProducts() : Observable<any>{
    return this.http.get(this.getCartProductApi);
  }
  
  getOrdersApi = 'http://localhost:8083/customer/view-my-orders'

  getOrders(): Observable<any>{
    return this.http.get(this.getOrdersApi);
  }

  getOrderDetailsApi = 'http://localhost:8083/customer/order-details'

  getOrderDetails(orderId: string) {
    return this.http.get(this.getAllProductApi);
  }


  

  removeProduct(id: number) : Observable<any>{
    return this.http.delete(this.getAllProductApi);
  }



}
