import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomerService } from '../../../../service/customer.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [NavbarComponent,NgFor,CommonModule, RouterLink],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit{

 

  reviewProduct(pId:any) {
    console.log("sending as",pId);
  this.router.navigate(['/customer/add-review',pId]);
  }
  returnProduct(opId:any) {
    this.router.navigate(['/customer/return',opId])
  }
exchangeProduct(opId:any) {
  this.router.navigate(['/customer/exchange',opId])

}


  constructor(
    private route:ActivatedRoute,
    private service: CustomerService,
    private router:Router
  ){}

  
  sdto:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const orderId = Number(params.get('orderId'));
        console.log("received orderID: ",orderId);
        this.service.viewOrderSummary(orderId).subscribe({
          next: (summarydto) => {
            console.log("summarydto: ",summarydto);
            this.sdto = summarydto;
          }
        })
      }
    })

    this.fetchAddress();
  }

address:any;

  fetchAddress(){
    this.service.viewAddress().subscribe({
      next: (addressdata)=>{
        console.log("address data: ",addressdata);
        this.address = addressdata[addressdata.length-1];
      }
    })
  }

  makePayment() {
    this.router.navigateByUrl("/customer/order-successful");  
  }

}


