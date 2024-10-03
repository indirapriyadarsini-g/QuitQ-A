import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { ProductServiceService } from '../../../service/product-service.service';

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

constructor(private productService:ProductServiceService)
{
  console.log(this.token);
this.fetchData()

  
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
}
