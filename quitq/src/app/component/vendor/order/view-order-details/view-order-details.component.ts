import { Component, OnInit } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../../navbar/navbar.component';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';
import { OrderDetailComponent } from "../order-detail/order-detail.component";
import { OrderProductDetailComponent } from '../order-product-detail/order-product-detail.component';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../../service/product-service.service';
@Component({
  selector: 'app-view-order-details',
  standalone: true,
  imports: [StepperModule, ButtonModule, NavbarComponent, OrderSummaryComponent, OrderDetailComponent,OrderProductDetailComponent],
  templateUrl: './view-order-details.component.html',
  styleUrl: './view-order-details.component.css'
})
export class ViewOrderDetailsComponent implements OnInit {
  id:number;
  id2:number;
  order:any[]=[];
constructor(private activeRoute:ActivatedRoute,private productService:ProductServiceService){}

ngOnInit(): void {
    this.id=parseInt(this.activeRoute.snapshot.paramMap.get('id'));
  this.fetchData()


}
fetchData(){
  this.productService.orderProductDetail().subscribe({
    next:(data)=>{
      this.order=data;
      console.log(this.order)
    this.filterData()
    },
    error:(error)=>{
      console.log(error)
    }
  })
}
filterData(){
  this.order=this.order.filter(o=>
    o.id==this.id
    
  )
  console.log(this.order);
}

}
