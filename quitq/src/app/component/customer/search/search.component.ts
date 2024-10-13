import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { CustomerService } from '../../../service/customer.service';
import { Product } from '../../../model/product/product.module';
import { SearchDto } from '../../../search-dto/search-dto.module';
import { SearchService } from '../../../service/search.service';
import { FormsModule } from '@angular/forms';
import { ProductWithImageModule } from '../../../model/product-with-image/product-with-image.module';


@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  imports:[NavbarComponent,NgIf,NgFor,FormsModule,RouterLink],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

addToWishlist(arg0: any) {
throw new Error('Method not implemented.');
}

  queryParams: any = {};

  dto:SearchDto = new SearchDto();

  constructor(
    private router: Router,
    private searchService:SearchService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    if(this.searchService.searchIsSet){
      this.searchService.selectedSearch$.subscribe({
        next: (dtodata) => {
          console.log("Selected search");
          console.log(dtodata);
          this.dto.prodName = dtodata.prodName;
          this.fetchSearchProducts();
        }
      })
    }
    else{
      this.fetchSearchProducts();
    }
  }

  productList: ProductWithImageModule[]=[];

  selectedCategory: string = "none"; 
  includeOutOfStock: string = "no"; 
  selectedDiscount: number = 0; 

  // Method to handle form submission
  onSubmit() {
    this.searchService.setProdSearch(false);
    console.log('Selected Category:', this.selectedCategory);
    console.log('Include Out of Stock:', this.includeOutOfStock);
    console.log('Selected Discount:', this.selectedDiscount);
  }

  

  fetchSearchProducts(){

    this.dto.category = this.selectedCategory;
    this.dto.includeOutOfStock = this.includeOutOfStock;
    this.dto.minDiscount = this.selectedDiscount;

    this.customerService.search(this.dto).subscribe({
      next: (prodList) => {
        console.log("prodlist after search:");
        console.log(prodList);
        this.productList = prodList;
      },
      error: (err) => console.log(err)
    })      
 
  }
  


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
   
  addToCart(product: Product) {

    if(!localStorage.getItem('token')){
      this.router.navigateByUrl("/auth/login");
    }
    else{
      this.customerService.addToCart(product).subscribe({
        next: (data) => {
          console.log("added to cart");
        },
        error: (err) =>{
          alert("Product already added.");
        }
      })
    }
    
  }

  getProductDetails(item:ProductWithImageModule){
    this.customerService.setProductSelected(item);
    this.router.navigateByUrl("/customer/view-product-details");
  }


}