import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../../service/product-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent  {
  order:any[]=[];
  constructor(private productService:ProductServiceService){}
  

}
