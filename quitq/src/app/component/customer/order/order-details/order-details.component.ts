import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../../service/customer.service';
import { CommonModule, NgFor } from '@angular/common';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [NgFor, NavbarComponent, CommonModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {
reviewProduct(pId:any) {
  console.log("sending as",pId);
this.router.navigate(['/customer/add-review',pId]);
}
exchangeProduct(opId:any) {
  this.router.navigate(['/customer/exchange',opId])

}
returnProduct(opId:any) {
  this.router.navigate(['/customer/return',opId])
}
  opwi:any;
 
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("inside oninit");
    // const opId = Number(this.route.snapshot.paramMap.get('opId'));
    this.route.paramMap.subscribe({
      next: params => {
      const opId = Number(params.get('orderId'));
      console.log("received opId: ",opId);
    this.customerService.viewOrderDetails(opId).subscribe({
      next: (data) => {
        this.opwi = data;
       
       
        console.log("order product details:");
        console.log(data);
      },
      error: (err) => console.error('Failed to fetch order details', err)
    });
      }
    });
    

    
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