import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Product { 
id:number;
title:string;
c:string;
price:number;
discount:number;
status:string;
outOfStock:boolean;
quantity:number;

// id: number;
//   title: string;
//   price: number;
//   discount: number;
//   status: string;
//   quantity: number;
//   c: string; // Assuming it's the category
//   outOfStock: boolean;

}
