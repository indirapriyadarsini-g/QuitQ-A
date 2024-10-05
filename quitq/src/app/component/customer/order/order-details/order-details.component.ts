import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../../service/customer.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {

  order: any;  

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.order = {
      orderId: 40283201402015541,
      orderDate: '3 October 2024',
      totalAmount: 239.0,
      shipTo: 'Indira',
      shippingStatus: 'Arriving 5 October - 12 October',
      items: [
        {
          productId: 1,
          title: 'Pikkme Samsung Galaxy M12 / A12 / F12 Smoke Cover',
          quantity: 1,
          price: 239.0,
          imageUrl: 'https://via.placeholder.com/150',
          status: 'Shipped',
          returnable: true,
          exchangeable: true
        }
      ]
    };

    // const orderId = this.route.snapshot.paramMap.get('id');
    // this.customerService.getOrderDetails(orderId).subscribe({
    //   next: (data) => this.order = data,
    //   error: (err) => console.error('Failed to fetch order details', err)
    // });
  }

 

  reviewItem(itemId: number) {
    console.log(`Review item with ID ${itemId}`);
    
  }

  returnItem(itemId: number) {
    console.log(`Return item with ID ${itemId}`);
    
  }

  exchangeItem(itemId: number) {
    console.log(`Exchange item with ID ${itemId}`);
    
  }

  goBack() {
    
  }
}