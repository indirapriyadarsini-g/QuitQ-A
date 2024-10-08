import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product/product.module';
import { SearchDto } from '../search-dto/search-dto.module';
import { ProductWithImageModule } from '../model/product-with-image/product-with-image.module';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  productList:Product[];

  getProductList():Product[]{
    return this.productList;
  }

  setProductList(pList:Product[]){
    this.productList = pList;
  }


  productSelected:ProductWithImageModule;

  getProductSelected(): ProductWithImageModule{
    return this.productSelected;
  }

  setProductSelected(prod:ProductWithImageModule){
    this.productSelected = prod;
  }


  registerProfileApi = 'http://localhost:8083/customer/register-profile';

  registerProfile(customer:any): Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.post(this.registerProfileApi,customer,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  viewProfileApi = 'http://localhost:8083/customer/view-my-profile';

  viewProfile(): Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.get(this.viewProfileApi,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  addToCartApi = 'http://localhost:8083/customer/add-to-cart'

  addToCart(product:Product): Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.post(this.addToCartApi,product,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  removeFromCartApi = 'http://localhost:8083/customer/remove-from-cart/';

  removeFromCart(cpId:number): Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.delete(this.removeFromCartApi+cpId,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  removeFromOrderApi = 'http://localhost:8083/customer/remove-from-order/';

  removeFromOrder(opId:number): Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.delete(this.removeFromCartApi+opId,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  addToWishlistApi = 'http://localhost:8083/customer/add-to-wishlist/';


  addToWishlist(product:any): Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.post(this.addToWishlistApi,product,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  viewWishlistApi = 'http://localhost:8083/customer/view-my-wishlist';
  getWishlistProducts(){
    const token = localStorage.getItem('token');
    return this.http.get(this.viewWishlistApi,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }


  addCountInCartApi = 'http://localhost:8083/customer/add-count-in-cart';

  subCountInCartApi = 'http://localhost:8083/customer/sub-count-in-cart';

  addCountInOrderApi = 'http://localhost:8083/customer/add-count-in-order';

  subCountInOrderApi = 'http://localhost:8083/customer/sub-count-in-order';

  orderApi = 'http://localhost:8083/customer/order';

  orderNowApi = 'http://localhost:8083/customer/order-now/';

  viewMyOrderApi = 'http://localhost:8083/customer/view-my-order';

  viewOrderDetails = 'http://localhost:8083/customer/view-order-details/';

  searchApi = 'http://localhost:8083/customer/search?';

  search(dto:SearchDto):Observable<any>{
    console.log(dto);
    let params = new HttpParams();
    for (let key in dto) {
      if (dto.hasOwnProperty(key) && dto[key] !== undefined && dto[key] !== null) {
          params = params.append(key, dto[key]);
      }
  }
  return this.http.get(this.searchApi, { params });
    // return this.http.get(this.searchApi,dto);
  }

  addAddressApi = 'http://localhost:8083/customer/add-address';

  viewAddressApi = 'http://localhost:8083/customer/view-address';

  addReviewApi = 'http://localhost:8083/customer/add-review/';

  addReview(pId: number,review:any): Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.post(this.addReviewApi+pId,{
      "stars":review.stars,
      "reviewContent":review.reviewContent,
      "customer":null,
      "product":null
    },{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  viewProductReviewsApi = 'http://localhost:8083/customer/view-product-reviews/';
  
  getProductReviews(pId:number){
    const token = localStorage.getItem('token');
    return this.http.get(this.viewProductReviewsApi+pId)
  }

  


  getAllProductApi = 'http://localhost:8083/customer/view-all-product'

  getAllProducts() : Observable<any>{
    return this.http.get(this.getAllProductApi);
  }

  getCartProductApi = 'http://localhost:8083/customer/view-my-cart'
  getCartProducts() : Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.get(this.getCartProductApi,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    });
  }
  

}
