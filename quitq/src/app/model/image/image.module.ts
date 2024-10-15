import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product/product.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Image { 
  id:number;
  imageName:string;
  status: string;
  product: Product;
}
