import { Component } from '@angular/core';
import { OrderServiceService } from '../../../service/order-service.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageServiceService } from '../../../service/image-service.service';

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
  constructor(private orderService:OrderServiceService,private route:Router,private imageService:ImageServiceService){
    this.orderService.showExchangeProduct().subscribe({
      next:(data)=>{
        this.exchange=data
        this.exchange1=data;
        console.log(data)
        this.getImageProduct();
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
  getImageProduct(){
    for(let e of this.exchange){
      console.log("Orders=",e)
      this.imageService.getOneImageOfProduct(e.orderProduct.product.id).subscribe({
        next:(data)=>{
          console.log(data)
          if(data.length!=0)
          e.orderProduct.product.imageName="images/"+data[0].imageName;
        if(data.length===0)
        {
          e.orderProduct.product.imageName="https://images-cdn.ubuy.co.in/64d849a391df522441229ece-lenovo-flex-5-14-fhd-touchscreen.jpg"
        }
          console.log(e)
        },
        error:(error)=>{
          console.log(error)
        }
      })
      
  
    }
    console.log(this.exchange);
    
  }
  
}
