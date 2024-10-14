import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { ProductServiceService } from '../../../service/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [FormsModule,NavbarComponent,NgIf,NgFor],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {
successMssg:string=undefined;
errorMssg:string=undefined;
title:string;
discount:number;
price:number;
quantity:number;
outOfStock:boolean;
token:string;
category:any[]=[];
id:number
c:string="";
product:any[]=[];
constructor(private productService:ProductServiceService,private activateRoute:ActivatedRoute,private route:Router){
  this.token=localStorage.getItem('token');
  this.productService.getAllCategory(this.token).subscribe({
    next:(data)=>{
      this.category=data;
    }

  })

}
resetmsg(){

}
ngOnInit(): void {
    this.id=parseInt(this.activateRoute.snapshot.paramMap.get('id'));
    this.productService.getProductId(this.id).subscribe({
      next:(data)=>{
        this.product=data;
        console.log(data)
        this.title=data.title;
        this.price=data.price;
        this.discount=data.discount;
        this.outOfStock=data.outOfStock;
        this.quantity=data.quantity;
        this.c=data.c;
      },
      error:(error)=>{
        console.log(error);
      }
    })
    this.productService.productInfo$.subscribe({
      next:(data)=>{
        console.log("Data Title="+data.title);
      },
      error:(error)=>[
        console.log(error)
      ]
    })
}
onClick(){
this.productService.updateProduct(this.id,{
  'title':this.title,
  'price':this.price,
  'c':this.c,
  'discount':this.discount,
  'quantity':this.quantity
}).subscribe({
  next:(data)=>{
    this.successMssg="Product Updated Successfully";
    this.errorMssg=undefined;

  },
  error:(error)=>{
    if(error.status==200){
      this.successMssg="Product Updated Successfully";
      this.errorMssg=undefined;
    }
    else{
      this.errorMssg="Something went wrong";
      this.successMssg=undefined;
    }
  }
})
}
onClick1(){
  this.route.navigateByUrl("vendor/product-list")
}

}
/**With behaviour subject we get the data but this data will be gone once refresehd  */