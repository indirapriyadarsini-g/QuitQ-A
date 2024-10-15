import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { ProductServiceService } from '../../../service/product-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-review-product',
  standalone: true,
  imports: [NavbarComponent,NgFor],
  templateUrl: './review-product.component.html',
  styleUrl: './review-product.component.css'
})
export class ReviewProductComponent implements OnInit {
  id:number;
  review:any[]=[];
  constructor(private  activateRoute:ActivatedRoute,private productService:ProductServiceService){}
  ngOnInit(): void {
      this.id=Number(this.activateRoute.snapshot.paramMap.get('id'))
this.productService.getAllReview(this.id).subscribe({
  next:(data)=>{
    console.log(data);
    this.review=data;
  },
  error:(error)=>{
    console.log(error)
  }
})
  }


}
