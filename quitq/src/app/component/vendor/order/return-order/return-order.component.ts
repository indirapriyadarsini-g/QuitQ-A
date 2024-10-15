import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { OrderServiceService } from '../../../service/order-service.service';
import { Router } from '@angular/router';
import { ImageServiceService } from '../../../service/image-service.service';

@Component({
  selector: 'app-return-order',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgIf],
  templateUrl: './return-order.component.html',
  styleUrl: './return-order.component.css'
})
export class ReturnOrderComponent {
  return:any[]=[];
  return1:any[]=[]
  totalPage:number=0;
  pageSize:number=3;
  pageNumber:number=0;
  counter:number=0;
  page:number[]=[];
  first:boolean=false;
  last:boolean=false;
  status:string=""
  constructor(private orderService:OrderServiceService,private route:Router,private imageService:ImageServiceService){
    this.orderService.showReturnProduct().subscribe({
      next:(data)=>{
        this.return=data
        this.return1=data
this.getImageProduct()
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
  onView(r:any){
    this.route.navigate(["vendor/return-order-detail",r.id])
  }
  allReturn(){
    this.return=this.return1;
    
  }
  returnMonth(){
    this.return=this.return1;
    let dateTime=new Date().toISOString().split("-")[1]
    console.log(dateTime)
    this.return=this.return.filter(r=>
      r.orderProduct.order.orderPlacedTime.split("-")[1]===dateTime
    )
  }
getImageProduct(){
    for(let r of this.return){
      console.log("Orders=",r)
      this.imageService.getOneImageOfProduct(r.orderProduct.product.id).subscribe({
        next:(data)=>{
          console.log(data)
          if(data.length!=0)
          r.orderProduct.product.imageName="images/"+data[0].imageName;
        if(data.length===0)
        {
          r.orderProduct.product.imageName="https://images-cdn.ubuy.co.in/64d849a391df522441229ece-lenovo-flex-5-14-fhd-touchscreen.jpg"
        }
          console.log(r)
        },
        error:(error)=>{
          console.log(error)
        }
      })
      
  
    }
    console.log(this.return);
    
  }
}
