import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../service/customer.service';
import { Product } from '../../../../model/product/product.module';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductWithImageModule } from '../../../../model/product-with-image/product-with-image.module';
import { combineLatest } from 'rxjs';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { SliderModule } from 'primeng/slider';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [NgFor,RouterLink,NgIf,PaginatorModule,SliderModule,
    MessagesModule, ButtonModule, RippleModule
  ],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{


  constructor(private customerService: CustomerService,
    private router: Router,
    private route:ActivatedRoute
  ){ }

filteredProds:any;

  ngOnInit(): void {
    // Combine the latest products with the selected category
    combineLatest([
      this.customerService.getAllProducts(), // Get all products
      this.customerService.selectedCategory$ // Get selected category
    ]).subscribe({
      next: ([products, category]) => {
        
        this.productList = products;
        console.log(this.productList);
        if (category) {
          console.log("category identified:"+category);
         
          this.filteredProds = this.productList.filter(prod => prod.product.c === category);
          console.log(this.filteredProds);
        } else {
          this.filteredProds = [...this.productList];
        }
        // console.log(this.productList,this.filteredProds);
      },
      error: (err) => console.log(err)
    });
  }

  // ngOnInit(): void {
  //   this.fetchLatestProducts();
    
  // }

  productList: any[];

  fetchLatestProducts() {
    this.customerService.getAllProducts().subscribe({

      next: (data) => {
        this.productList = data;
        console.log(this.productList);
        this.customerService.selectedCategory$.subscribe({
          next: (category) => {
            console.log("received: "+category);
          if (category) {
            console.log("category identified:"+category);
            this.productList = this.productList.filter(prod => prod.c === category);
          } else {
            console.log("not happening ");
            this.productList = [...this.productList]; // Show all if no category is set
          }
        },
      error: (err) => console.log(err)
    });
        // if(this.customerService.showOnly){
        //   console.log("category set"+this.customerService.getCategory());
        //   this.productList = this.productList.filter(prod => prod.c == this.customerService.getCategory());
        //   console.log(this.productList);
        // }
      },
      error: (err) => {
        console.error('Error fetching latest products', err);
      }
  });
  }


  addToCart(product: Product) {

    if(!localStorage.getItem('token')){
      this.router.navigateByUrl("/auth/login");
    }
    else{
      this.customerService.addToCart(product).subscribe({
        next: (data) => {
          console.log("added to cart");
          alert("Added to cart");
        },
        error: (err) =>{
          alert("Product already added.");
          console.log(err);
        }
      })
    }
    
  }



  addToWishlist(product: Product) {

    if(!localStorage.getItem('token')){
      this.router.navigateByUrl("/auth/login");
    }
    else{
      this.customerService.addToWishlist(product).subscribe({
        next: (data) => {
          this.addMessages()
          console.log("added to wishlist");
          alert("Added to wishlist");
        },
        error: (err) =>{
          alert("Product already added.");
          console.log(err);
        }
      })
    }
    
  }

 

  getProductDetails(item:ProductWithImageModule){
    const pId = item.product.id;
    this.router.navigate(["/customer/product-details",pId]);

    // this.customerService.setProductSelected(item);
    // this.router.navigateByUrl("/customer/view-product-details");
  }

  first: number = 0;

    rows: number = 10;

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows;
        this.updatePageProducts();
    }


    updatePageProducts(){
      const start = this.first;
      const end = this.first + this.rows;
      this.filteredProds = this.productList.slice(start, end);
    }


    messages: any[] | undefined;

    addMessages() {
      this.messages = [
          { severity: 'info', summary: 'Dynamic Info Message' },
          { severity: 'success', summary: 'Added' },
          { severity: 'warn', summary: 'Dynamic Warning Message' }
      ];
  }
  clearMessages() {
    this.messages = [];
  }
  
}
