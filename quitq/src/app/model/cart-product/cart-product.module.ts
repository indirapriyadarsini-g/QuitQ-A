import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../cart/cart.module';
import { Product } from '../product/product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CartProduct { 
  id:number;
  productQuantity:number;
  productTotalAmount:number;
  productDiscount: number;
  amountPayable: number;
  status: string;
  cart: Cart;
  product: Product;    
}

