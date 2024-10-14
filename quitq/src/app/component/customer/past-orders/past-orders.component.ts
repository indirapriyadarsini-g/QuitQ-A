import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../../service/customer.service';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-past-orders',
  standalone: true,
  imports: [NgClass, NgFor, NavbarComponent],
  templateUrl: './past-orders.component.html',
  styleUrl: './past-orders.component.css'
})
export class PastOrdersComponent implements OnInit{

  constructor(private router: Router,
    private service:CustomerService
  ) {}

  orders:any;
  image:any;

  ngOnInit(): void {
    this.service.viewMyOrders().subscribe({
      next: (ordersData) => {
        console.log("retrieved ordersdata: ");
        console.log(ordersData);
        this.orders = ordersData;

      },
      error: (err) => console.log(err)
    })
  }



  

  goToOrderDetails(opId: number) {
    console.log("giving opID:",opId);
    // this.router.navigateByUrl("/customer/view-order-details/"+orderId);
    this.router.navigate(['/customer/view-order-details', opId]);
  }
}
