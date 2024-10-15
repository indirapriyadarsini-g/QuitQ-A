import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../../service/customer.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [NavbarComponent,NgFor,CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit{



reviewItem(arg0: any) {
throw new Error('Method not implemented.');
}
returnItem(arg0: any) {
throw new Error('Method not implemented.');
}
exchangeItem(arg0: any) {
throw new Error('Method not implemented.');
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


