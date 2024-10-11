import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product/product.module';
import { SearchDto } from '../search-dto/search-dto.module';
import { ProductWithImageModule } from '../model/product-with-image/product-with-image.module';
import { Customer } from '../model/customer/customer.module';

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
  getWishlistProducts():Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.get(this.viewWishlistApi,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }


  addCountInCartApi = 'http://localhost:8083/customer/add-count-in-cart';

  addCountInCart(cartProduct:any):Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.put(this.addCountInCartApi,cartProduct,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  subCountInCartApi = 'http://localhost:8083/customer/sub-count-in-cart';

  subCountInCart(cartProduct:any):Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.put(this.subCountInCartApi,cartProduct,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  addCountInOrderApi = 'http://localhost:8083/customer/add-count-in-order';

  addCountInORder(orderProduct:any):Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.put(this.addCountInOrderApi,orderProduct,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  subCountInOrderApi = 'http://localhost:8083/customer/sub-count-in-order';

  subCountInOrder(orderProduct:any):Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.put(this.subCountInOrderApi,orderProduct,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  orderApi = 'http://localhost:8083/customer/order';

  order():Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.post(this.orderApi,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  orderNowApi = 'http://localhost:8083/customer/order-now/';

  orderNow(pId:number):Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.post(this.orderNowApi+pId,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  viewMyOrderApi = 'http://localhost:8083/customer/view-my-order';

  viewMyOrder(){
    const token = localStorage.getItem('token');
    return this.http.get(this.viewMyOrderApi,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  viewOrderDetailsApi = 'http://localhost:8083/customer/view-order-details/';

  viewOrderDetails(oId:number){
    const token = localStorage.getItem('token');
    return this.http.get(this.viewOrderDetailsApi+oId,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  searchApi = 'http://localhost:8083/customer/search?';

  search(dto:SearchDto):Observable<any>{
    console.log(dto);
    let params = new HttpParams();
    for (let key in dto) {
      if (dto.hasOwnProperty(key) && dto[key] !== undefined && dto[key] !== null) {
          params = params.append(key, dto[key]);
      }
  }
  console.log(params);
  return this.http.get(this.searchApi, { params });
    // return this.http.get(this.searchApi,dto);
  }

  addAddressApi = 'http://localhost:8083/customer/add-address';

  addAddress(address:any):Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.post(this.addAddressApi,address,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

  viewAddressApi = 'http://localhost:8083/customer/view-address';

  viewAddress():Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.get(this.viewAddressApi,{
      headers: new HttpHeaders().set('Authorization', 'Bearer '+token)
    })
  }

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
  
//                          BEHAVIOR SUBJECTS                        //


  private selectedCategory = new BehaviorSubject<string>(null);
  selectedCategory$ = this.selectedCategory.asObservable(); 

  setCategory(category: string) {
    this.selectedCategory.next(category); // Emit new category
    console.log("category "+category+" set");
    console.log(this.selectedCategory);
  }

  private selectedCart = new BehaviorSubject<any>(null);
  selectedCart$ = this.selectedCart.asObservable();

  setCart(cart:any){
  this.selectedCart.next(cart);
}


private selectedProfile = new BehaviorSubject<any>(null);
selectedProfile$ = this.selectedProfile.asObservable();

setProfile(profile:any){
  this.selectedProfile.next(profile);
}

private selectedAddress = new BehaviorSubject<any>(null);
selectedAddress$ = this.selectedAddress.asObservable();

setAddress(address:any){
  this.selectedAddress.next(address);
}


}





