import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { ProductServiceService } from '../../service/product-service.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [NavbarComponent,NgFor,FormsModule,NgIf],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
category:any[]=[];
token:string="";
c:string="";
title:string="";
price:number=0;
discount:number=0;
quantity:number=0;
successMssg:string="";
errorMssg:string="";
constructor(private productService:ProductServiceService){

  this.token=localStorage.getItem('token')
this.productService.getAllCategory(this.token).subscribe({
  next:(data)=>{
    this.category=data;
  },
  error:(error)=>{
    console.log("Error occured")
  }
})
}
onClick(){
  console.log("c="+this.discount)
this.productService.addProduct({
  "title":this.title,
  "price":this.price,
  "discount":this.discount,
  "quantity":this.quantity,
  "c":this.c
}).subscribe({
  next:(data)=>{
    console.log("Done");
    this.successMssg="Product Added Successfully";
    this.errorMssg=undefined;
  },
  error:(error)=>{
    this.errorMssg="Something went wrong",
    this.successMssg=undefined
    console.log(error)
  }
})
}
resetmsg(){
this.successMssg=undefined;
this.errorMssg=undefined
}
}
/**[(ngModel)] is part of FormModule componet which bind the 
 * [ngModel]="overRideRate" is to bind overRideRate to the input.value
(ngModelChange)="overRideRate = $event" is to update overRideRate with the value of input.value when the change event was emitted.
<input type="text" [ngModel]="overRideRate">
This syntax is also known as property binding. Now if the overRideRate property of the input field changes the view automatically will get updated. However if the view updates when the user enters a number the overRideRate property will not be updated.

view to model:

(input)="change($event)"            // calling a method called change from the component class
(input)="overRideRate=$event.target.value" // on input save the new value in the title property
What happens here is that an event is triggered (in this case input event, but could be any event). We then can call methods of the component class or directly save the property in a class property.

2-way data binding:

<input [(ngModel)]="overRideRate" type="text" >
The following syntax is used for 2-way data binding. It is basically a syntactic sugar for both:

Binding model to view.
Binding view to model
Now something changes inside our class this will reflect our view (model to view), and whenever the user changes the input the model will be updated (view to model).

 */