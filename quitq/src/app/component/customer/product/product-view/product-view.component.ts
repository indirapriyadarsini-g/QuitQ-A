import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../service/customer.service';
import { Product } from '../../../../model/product/product.module';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProductWithImageModule } from '../../../../model/product-with-image/product-with-image.module';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [NgFor,RouterLink,NgIf],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{
addToWishlist(arg0: any) {
throw new Error('Method not implemented.');
}

  constructor(private customerService: CustomerService,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.fetchLatestProducts();
  }

  productList: any[];

  fetchLatestProducts() {
    this.customerService.getAllProducts().subscribe({

      next: (data) => {
        this.productList = data;
        console.log(this.productList);
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
