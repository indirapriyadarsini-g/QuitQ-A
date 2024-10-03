import { Component } from '@angular/core';
import { OrderServiceService } from '../../../service/order-service.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-exchange-order',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgIf],
  templateUrl: './exchange-order.component.html',
  styleUrl: './exchange-order.component.css'
})
export class ExchangeOrderComponent {
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
    this.orderService.showExchangeProduct().subscribe({
      next:(data)=>{
        this.products=data
        console.log(data)
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
