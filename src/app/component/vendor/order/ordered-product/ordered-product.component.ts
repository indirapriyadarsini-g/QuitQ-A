import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductServiceService } from '../../../service/product-service.service';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-ordered-product',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgIf],
  templateUrl: './ordered-product.component.html',
  styleUrl: './ordered-product.component.css'
})
export class OrderedProductComponent {
  products:any[]=[];
  totalPage:number=0;
  pageSize:number=3;
  pageNumber:number=0;
  counter:number=0;
  page:number[]=[];
  first:boolean=false;
  last:boolean=false;
    constructor(private productService:ProductServiceService){
    this.fetchData();
    console.log(this.page)
  }
  fetchData(){
    this.productService.viewOrderedProduct(this.pageNumber,this.pageSize).subscribe({
      next:(data)=>{
       this.products=data.content;
       this.totalPage=data.totalPages;

       this.first=data.first;
       this.last=data.last;
       console.log(data)
       if(this.counter==0){
        let i=0;
        while(i<this.totalPage){
          this.page.push(i);
          i++;
        };
        this.counter=this.counter+1;
       }
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
