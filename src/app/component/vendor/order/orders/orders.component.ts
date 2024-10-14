import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { ProductServiceService } from '../../../service/product-service.service';
import { OrderServiceService } from '../../../service/order-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgIf,FormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
orders:any[]=[];
order2:any[]=[];
date:any;
month:any;

constructor(private productService:ProductServiceService,private route:Router){
this.fetchData();

}
allOrders(){
  this.fetchData();
}
fetchData(){
  this.productService.orderProductDetail().subscribe({
    next:(data)=>{
      this.orders=data;
      this.order2=data;
      console.log(this.orders);
    },
    error:(error)=>{
      console.log(error)
    }
  })
}
todayOrder(){
  this.orders=this.order2;

let dateTime=new Date();
this.orders=this.orders.filter(o=>
  o.order.orderPlacedTime.split("T")[0]===new Date().toISOString().split("T")[0]
  
  
)
console.log(this.orders)
}
orderThisMonth(){
this.orders=this.order2;
  let dateTime=new Date();
  this.orders=this.orders.filter(o=>

  Number(o.order.orderPlacedTime.split("-")[1])===10
  

  
)
console.log(this.orders)
}
orderDelivered(){
  this.orders=this.order2;

  console.log("Hello")
  this.orders=this.orders.filter(o=>
  
     o.order.status.toString()==="DELIVERED"
  )
}
onChange(){
  console.log(this.date);
}
onMonthChange(){
  console.log(this.month)
}
dateOrder(){
  this.orders=this.order2;
console.log(this.date);
this.orders=this.orders.filter(o=>
o.order.orderPlacedTime.split("T")[0]===this.date
)
console.log(this.orders);
}
monthOrder(){
  this.orders=this.order2;
  console.log(this.month);
  this.orders=this.orders.filter(o=>
    Number(o.order.orderPlacedTime.split("-")[1])===Number(this.month.split("-")[1])

  )
  console.log(this.orders);
}
onView(o:any){
  console.log(o.id)
this.route.navigate(["vendor/order-view/",o.id])
}
}
