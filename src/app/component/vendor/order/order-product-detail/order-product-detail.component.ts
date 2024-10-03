import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductServiceService } from '../../../service/product-service.service';
import { NavbarComponent } from '../../navbar/navbar.component';

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
  constructor(private productService:ProductServiceService){
    this.fetchData()
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
}
