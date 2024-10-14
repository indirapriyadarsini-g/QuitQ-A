import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
productInfo$=new BehaviorSubject<Product>({})
setProductInfo(obj:Product){
  this.productInfo$.next(obj);
}
orderInfo$=new BehaviorSubject({
  id:0,
  status:'',
  orderPlacedTime:'',
  orderDeliveredTime:''

})

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
  getOutOfStockProduct():Observable<any>{
    return this.http.get<any>('http://localhost:8082/product/vendor/product/outOfStock',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  getInStockProduct():Observable<any>{
    return this.http.get<any>('http://localhost:8082/product/vendor/product/inStock',{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  getProductArchived(name:string):Observable<any>{
    return this.http.get<any>('http://localhost:8082/product/vendor/status/'+name,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
  getProductId(id:number):Observable<any>{
    return this.http.get<any>('http://localhost:8082/product/find/'+id,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

    })
  }
makeProductActive(id:number):Observable<any>{
  return this.http.put<any>('http://localhost:8082/product/vendor/changeStatus/'+id,null,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
makeProductInActive(id:number):Observable<any>{
  return this.http.delete<any>('http://localhost:8082/product/delete/'+id,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
getAllReview(id:number):Observable<any>{
  return this.http.get('http://localhost:8082/review/getAll/'+id,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
updateProduct(id:number,obj:any):Observable<any>{
  return this.http.put('http://localhost:8082/product/update/'+id,obj,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
getProductByCategoryName(name:any):Observable<any>{
  return this.http.get<any>('http://localhost:8082/product/category/'+name,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
makeHardDelete(id:number):Observable<any>{
  return this.http.delete('http://localhost:8082/product/hardDelete/'+id,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })

}
categoryStats():Observable<any>{
  return this.http.get<any>('http://localhost:8082/product/vendor/categorySold',{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
topSellingProducts(month:number):Observable<any>{
  return this.http.get<any>('http://localhost:8082/orderproduct/vendor/topSellingProduct/'+month,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
topSellingProductsYear(year:number):Observable<any>{
  return this.http.get<any>('http://localhost:8082/orderproduct/vendor/topSellingProductYear/'+year,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
topOrderedProductsYear(year:number):Observable<any>{
  return this.http.get<any>('http://localhost:8082/orderproduct/vendor/topOrderedYear/'+year,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
topOrderedProductsMonth(month:number):Observable<any>{
  return this.http.get<any>('http://localhost:8082/orderproduct/vendor/topOrdered/'+month,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
productStatsMonth(month:number):Observable<any>{
  return this.http.get<any>('http://localhost:8082/orderproduct/vendor/productStats/'+month,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
productStatsYear(year:number):Observable<any>{
  return this.http.get<any>('http://localhost:8082/orderproduct/vendor/productStatsYear/'+year,{
    headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))

  })
}
}
