import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SearchDto { 
  category: string = 'none';
  minDiscount: number = 0;
  prodName: string = "none";
  includeOutOfStock: string = "no";
}
