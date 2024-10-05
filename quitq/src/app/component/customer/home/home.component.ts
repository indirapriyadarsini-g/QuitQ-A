import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';
import { CustomerService } from '../../../service/customer.service';
import { Product } from '../../../model/product/product.module';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
addToCart(prod: any) {
throw new Error('Method not implemented.');
}

  productList: Product[] = [];

  constructor(private router:Router, private customerService : CustomerService){

  }
  ngOnInit(): void {
    this.fetchLatestProducts();
  }
  fetchLatestProducts() {
    this.customerService.getAllProducts().subscribe({

      next: (data) => {
        this.productList = data;
        console.log(this.productList);
      },

      // next: (products: Product[]) => {
      //   this.productList = products;  
      //   console.log(products);
      // },
      error: (err) => {
        console.error('Error fetching latest products', err);
      }
  });
  }

  
onCategoryClick(cat: string) {
this.router.navigateByUrl("/search/?param="+cat)
}

}
