import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { ProductServiceService } from '../../../service/product-service.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-stats',
  standalone: true,
  imports: [NavbarComponent,NgFor,FormsModule],
  templateUrl: './product-stats.component.html',
  styleUrl: './product-stats.component.css'
})
export class ProductStatsComponent {
  products:any[]=[]
  orderedProducts:any[]=[]
  productStats:any[]=[]
  constructor(private productService:ProductServiceService){
    this.onChange('YEAR');
    this.onChange1('YEAR');
    this.onChange3('YEAR')
  }
onChange(o:any){
switch(o){
  case 'MONTH':
    this.topSellingProductMonth();
    break;
  case 'YEAR':
    this.topSellingProductsYear();
    break;

}
}
onChange1(o:any){
  switch(o){
    case 'MONTH':
      this.topOrderedProductMonth();
      break;
    case 'YEAR':
      this.topOrderedProductsYear();
      break;
  
  }
  }
  onChange3(o:any){
    switch(o){
      case 'MONTH':
        this.productStatsMonth();
        break;
      case 'YEAR':
        this.productStatsYear();
        break;
    
    }
    }
    productStatsMonth(){
      let d=new Date();

      this.productService.productStatsMonth(parseInt(d.toISOString().split("-")[1])).subscribe({
        next:(data)=>{
          this.productStats=data;
          console.log(this.productStats)
        },
        error:(error)=>{
          console.log(error)
        }
      })
    }
    productStatsYear(){
      let d=new Date();

      this.productService.productStatsYear(parseInt(d.toISOString().split("-")[0])).subscribe({
        next:(data)=>{
          this.productStats=data;
          console.log(this.productStats)
        },
        error:(error)=>{
          console.log(error)
        }
      })
    }
  topOrderedProductsYear(){
    let d=new Date();

 
  this.productService.topOrderedProductsYear(parseInt(d.toISOString().split("-")[0])).subscribe({
  next:(data)=>{
this.orderedProducts=data
console.log(this.products)

  },
  error:(error)=>{
    console.log(error)
  }
})
  }
  topOrderedProductMonth(){
    let d=new Date();

    this.productService.topOrderedProductsMonth(parseInt(d.toISOString().split("-")[1])).subscribe({
      next:(data)=>{
        this.orderedProducts=data;
        console.log(this.orderedProducts)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

topSellingProductMonth(){
  let d=new Date();

 
  this.productService.topSellingProducts(parseInt(d.toISOString().split("-")[1])).subscribe({
  next:(data)=>{
this.products=data
console.log(this.products)

  },
  error:(error)=>{
    console.log(error)
  }
})
}
topSellingProductsYear(){
  let d=new Date();

 
  this.productService.topSellingProductsYear(parseInt(d.toISOString().split("-")[0])).subscribe({
  next:(data)=>{
this.products=data
console.log(this.products)

  },
  error:(error)=>{
    console.log(error)
  }
})
}
}
