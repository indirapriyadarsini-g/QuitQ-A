import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../../service/customer.service';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private service: CustomerService
  ){}

  
  sdto:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const orderId = Number(params.get('orderId'));
        console.log("received orderID: ",orderId);
        this.service.viewOrderDetails(orderId).subscribe({
          next: (summarydto) => {
            console.log("summarydto: ",summarydto);
            this.sdto = summarydto;
          }
        })
      }
    })
  }

}
