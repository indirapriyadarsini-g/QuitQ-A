import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { OrderServiceService } from '../../../service/order-service.service';

@Component({
  selector: 'app-return-order',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgIf],
  templateUrl: './return-order.component.html',
  styleUrl: './return-order.component.css'
})
export class ReturnOrderComponent {
  products:any[]=[];
  totalPage:number=0;
  pageSize:number=3;
  pageNumber:number=0;
  counter:number=0;
  page:number[]=[];
  first:boolean=false;
  last:boolean=false;
  status:string=""
  constructor(private orderService:OrderServiceService){
    this.orderService.showReturnProduct().subscribe({
      next:(data)=>{
        this.products=data
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
  onPrev(){
    this.pageNumber=this.pageNumber-1;
  }
  onNext(){
    this.pageNumber=this.pageNumber+1;
  }
  onPageClick(n:number){
    this.pageNumber=n;
  
  }
}
