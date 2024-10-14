import { Component } from '@angular/core';
import { OrderServiceService } from '../../../service/order-service.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exchange-order',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgIf],
  templateUrl: './exchange-order.component.html',
  styleUrl: './exchange-order.component.css'
})
export class ExchangeOrderComponent {
  exchange:any[]=[];
  exchange1:any[]=[];
  totalPage:number=0;
  pageSize:number=3;
  pageNumber:number=0;
  counter:number=0;
  page:number[]=[];
  first:boolean=false;
  last:boolean=false;
  status:string=""
  constructor(private orderService:OrderServiceService,private route:Router){
    this.orderService.showExchangeProduct().subscribe({
      next:(data)=>{
        this.exchange=data
        this.exchange1=data;
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
  allExchange(){
this.exchange=this.exchange1;
  }
  exchangeMonth(){
    this.exchange=this.exchange1;
    let dateTime=new Date().toISOString().split("-")[1]
    console.log(this.exchange[0].exchangeInitiatedDate.split("-")[1])
    this.exchange=this.exchange.filter(e=>
      e.exchangeInitiatedDate.split("-")[1]===dateTime
    )
    console.log(this.exchange)
  }
  onView(e:any){
this.route.navigate(["vendor/exchange-order-detail",e.id])
  }
}
