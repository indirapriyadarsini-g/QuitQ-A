import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { OrderServiceService } from '../../../service/order-service.service';

@Component({
  selector: 'app-exchange-order-detail',
  standalone: true,
  imports: [NgIf,NgFor,NavbarComponent],
  templateUrl: './exchange-order-detail.component.html',
  styleUrl: './exchange-order-detail.component.css'
})
export class ExchangeOrderDetailComponent implements OnInit{
  id:number;
  exchange:any[]=[];
  constructor(private activateRoute:ActivatedRoute,private orderService:OrderServiceService){}
ngOnInit(): void {
  this.id=parseInt(this.activateRoute.snapshot.paramMap.get('id'));
  this.fetchData();
}
fetchData(){
this.orderService.showExchangeProduct().subscribe({
  next:(data)=>{
    this.exchange=data;
    this.exchange=this.exchange.filter(e=>
      e.id===this.id
    )
    console.log(this.exchange);
  },
  error:(error)=>{
    console.log(error);
  }
})
}
}
