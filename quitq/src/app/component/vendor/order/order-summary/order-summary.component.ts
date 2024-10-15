import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../../service/product-service.service';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent  {
  constructor(private productService:ProductServiceService){
   
  }
 

}
