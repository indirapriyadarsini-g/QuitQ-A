import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductServiceService } from '../../../service/product-service.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { OrderServiceService } from '../../../service/order-service.service';

@Component({
  selector: 'app-order-product-detail',
  standalone: true,
  imports: [NgFor,NgIf,NavbarComponent],
  templateUrl: './order-product-detail.component.html',
  styleUrl: './order-product-detail.component.css'
})
export class OrderProductDetailComponent {
  products:any[]=[];
  totalPage:number=0;
  pageSize:number=3;
  pageNumber:number=0;
  counter:number=0;
  page:number[]=[];
  first:boolean=false;
  last:boolean=false;
  status:string=""
  constructor(private productService:ProductServiceService,private orderService:OrderServiceService){
  }
  fetchData(){
    this.productService.orderProductDetail().subscribe({
      next:(data)=>{
       this.products=data;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
  onPrev(){
    this.pageNumber=this.pageNumber-1;
    this.fetchData();
  }
  onNext(){
    this.pageNumber=this.pageNumber+1;
    this.fetchData();
  }
  onPageClick(n:number){
    this.pageNumber=n;
    this.fetchData();
  
  }
  all()
  {
    this.fetchData()

  }
  delivered(){
    this.status="DELIVERED";
this.orderService.showOrderedProductByStatus(this.status).subscribe({
  next:(data)=>{
    this.products=data;
  },
  error:(error)=>{
    console.log(error)
    this.products=[]

  }
})
  }
  shipped(){
    this.status="SHIPPED";
    this.orderService.showOrderedProductByStatus(this.status).subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(error)=>{
        console.log(error)
        this.products=[]
      }
    })

  }
  ordered(){
this.status="ORDERED";
this.orderService.showOrderedProductByStatus(this.status).subscribe({
  next:(data)=>{
    this.products=data;
  },
  error:(error)=>{
    console.log(error)
    this.products=[]

  }
})
  }
}
