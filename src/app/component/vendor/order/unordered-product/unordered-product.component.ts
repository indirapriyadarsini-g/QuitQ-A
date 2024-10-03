import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductServiceService } from '../../../service/product-service.service';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-unordered-product',
  standalone: true,
  imports: [NgFor,NgIf,NavbarComponent],
  templateUrl: './unordered-product.component.html',
  styleUrl: './unordered-product.component.css'
})
export class UnorderedProductComponent {
  products:any[]=[];
  token:string=localStorage.getItem('token');
  totalPage:number=0;
  pageSize:number=3;
  pageNumber:number=0;
  counter:number=0;
  page:number[]=[];
  first:boolean=false;
  last:boolean=false;
    constructor(private productService:ProductServiceService){
    this.fetchData();
  }
  fetchData(){
    this.productService.viewUnOrderedProduct().subscribe({
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
