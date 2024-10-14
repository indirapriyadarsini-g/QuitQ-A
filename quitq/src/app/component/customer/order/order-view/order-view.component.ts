import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../service/customer.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-view',
  standalone: true,
  imports: [NavbarComponent,NgFor,RouterLink,
    CommonModule
  ],

  templateUrl: './order-view.component.html',
  styleUrl: './order-view.component.css'
})
export class OrderViewComponent implements OnInit {
onIncrement(_t11: any) {
throw new Error('Method not implemented.');
}
proceedToPayment() {
throw new Error('Method not implemented.');
}
onDecrement(_t11: any) {
throw new Error('Method not implemented.');
}
getGrandTotal(): string|number {
throw new Error('Method not implemented.');
}
  orders: any[] = [];
  orderInfo:any;
  constructor(private service: CustomerService) {}
  
  ngOnInit(): void {
    this.service.viewMyOrders().subscribe({
      next: (orderinfodata)=>{
        console.log("Orderinfo");
        console.log(orderinfodata);
        this.orderInfo = orderinfodata;
        this.service.viewOrderDetails(this.orderInfo.id).subscribe({
          next: (orderdetailsdata) => {
            console.log("order details data");
            console.log(orderdetailsdata);
          },
          error: (err) => console.log(err)
        })
      },
      error: (err) => console.log(err)
    })
  }

























  // ngOnInit(): void {
  //   // this.fetchOrders();
  //   this.orders = [
  //     {
  //       orderId: '402-8320140-2015541',
  //       orderDate: '3 October 2024',
  //       total: 239.00,
  //       shipTo: 'Indira',
  //       products: [
  //         {
  //           title: 'Pikkme Samsung Galaxy M12 / A12 / F12 Smoke Cover Protective Shockproof',
  //           image: 'path_to_image_1',
  //           arrivalDate: '5 October - 12 October',
  //           description: 'Matte Hard Back Case Cover for Samsung Galaxy M12 / A12 / F12 (Blue)'
  //         }
  //       ]
  //     },
  //     {
  //       orderId: '402-0726424-9173941',
  //       orderDate: '25 September 2024',
  //       total: 339.00,
  //       shipTo: 'Indira',
  //       products: [
  //         {
  //           title: 'RipBuy Hub Life Party glasses Gangster Funny Novelty Shades',
  //           image: 'path_to_image_2',
  //           arrivalDate: 'Delivered 27-Sept-2024',
  //           description: 'Package was handed to resident'
  //         }
  //       ]
  //     }
  //   ];
  // }

  // fetchOrders(): void {
  //   this.customerService.getOrders().subscribe({
  //     next: (data) => {
  //       this.orders = data;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching orders', error);
  //     }
  // });
  // }
}
