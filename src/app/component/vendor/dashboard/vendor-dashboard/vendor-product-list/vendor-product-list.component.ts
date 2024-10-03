import { Component } from '@angular/core';
import { ProductServiceService } from '../../../../service/product-service.service';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../../../navbar/navbar.component';

@Component({
  selector: 'app-vendor-product-list',
  standalone: true,
  imports: [NavbarComponent,NgFor],
  templateUrl: './vendor-product-list.component.html',
  styleUrl: './vendor-product-list.component.css'
})
export class VendorProductListComponent {
  products:any[]=[];
  token:string=localStorage.getItem('token');
  totalPage:number=0;
  pageSize:number=3;
  pageNumber:number=0;
  counter:number=0;
  page:number[]=[];
  first:boolean=false;
  last:boolean=false;
  status:string="inactive"

constructor(private productService:ProductServiceService)
{
  console.log(this.token);

  
}
fetchData(){
  this.productService.getAllProduct(this.pageNumber,this.pageSize).subscribe({
    next:(data)=>{
      this.products=data.content;
      this.totalPage=data.totalPages;
      this.first=data.first;
      this.last=data.last;
      console.log(this.totalPage)
      if(this.counter==0){
        let i=0;
        while(i<this.totalPage){
this.page.push(i);
i++;
        };
      }
      this.counter=this.counter+1;
      
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
AllProduct()
{
  this.fetchData()
}
OrderedProduct()
{
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
unOrderedProduct(){
  this.productService.viewUnOrderedProduct().subscribe({
    next:(data)=>{
     this.products=data;
    },
    error:(error)=>{
      console.log(error)
    }
  })
}
outOfStock(){
  this.productService.getOutOfStockProduct().subscribe({
    next:(data)=>{
      this.products=data;
    },
    error:(error)=>{
      console.log(error)
    }
  })
}
archiveProduct(){
  this.productService.getProductArchived(this.status).subscribe({
    next:(data)=>{
      this.products=data;
    },
    error:(error)=>{
      console.log(error)
    }
  })
}
}
