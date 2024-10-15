import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product/product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Cart {
  id:number;
  productList: Product[];
  customer: any;
  cartQuantity: number;
  cartTotal: number;
 }
