import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { CustomerService } from '../../../service/customer.service';
import { Product } from '../../../model/product/product.module';
import { SearchDto } from '../../../search-dto/search-dto.module';
import { SearchService } from '../../../service/search.service';


@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  imports:[NavbarComponent,NgIf,NgFor],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
//     next: (data) => {
//       this.productList = data;
//       console.log(this.productList);
//     },
//     error: (err) => console.log(err)
//   })
// }


  queryParams: any = {};

  constructor(
    private route: ActivatedRoute,
    private searchService:SearchService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.fetchSearchProducts();
    // this.route.queryParams.subscribe({
    //   next: (params) => {
    //     this.queryParams = params;
    //     this.fetchSearchProducts(this.queryParams);
    //     console.log(this.queryParams);
    //   }
    // });
  }

  productList: Product[]=[];

  // fetchSearchProducts(qp:any){
  //   // var query = '';
  //   // for (const [key, value] of Object.entries(qp)) {
  //   //   query = query+key+'='+value+'&';
  //   //   console.log(`Key: ${key}, Value: ${value}`);
  //   // }
  //   //   query = query.slice(0,-1);
  //   //   console.log(query);
  //   const query = qp;
  //   this.customerService.search(query).subscribe({
  //     next: (data) => {
  //       this.productList = data;
  //       console.log(this.productList);
  //     },
  //     error: (err) => console.log(err)
  //   })
  // }

  fetchSearchProducts(){
    this.productList = this.customerService.getProductList();
  }
  
  dto:SearchDto;

  searchByCategory(cat: string) {
    this.dto.category = cat;
    this.searchService.search(this.dto);
    }

  searchByStock(yno:string){
    this.dto.includeOutOfStock = yno;
    this.searchService.search(this.dto);
  }

  searchByDiscount(n:number){
    this.dto.minDiscount = n;
    this.searchService.search(this.dto);
  }
   
  


}