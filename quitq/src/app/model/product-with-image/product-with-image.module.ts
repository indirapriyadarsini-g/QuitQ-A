import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product/product.module';
import { Image } from '../image/image.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductWithImageModule { 
  product: Product;
  imageList: Image[];

}
