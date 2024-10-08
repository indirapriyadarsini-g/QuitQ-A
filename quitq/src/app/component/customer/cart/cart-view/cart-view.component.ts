import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { CustomerService } from '../../../../service/customer.service';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgIf],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent {
  cartProducts: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCartProducts();
  }

  loadCartProducts(): void {
    this.customerService.getCartProducts().subscribe({
      next: (products) => {
        this.cartProducts = products;
      },
      error: (error) => {
        console.error('Error fetching cart products', error);
      }
    }
      
    );
  }

  getTotalItems(): number {
    return this.cartProducts.reduce((sum, product) => sum + product.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartProducts.reduce((sum, product) => sum + product.quantity * product.price, 0);
  }

  removeFromCart(cpId: number): void {
    this.customerService.removeFromCart(cpId).subscribe({
      next: (data) => {
        console.log(data);
        
        const index = this.cartProducts.findIndex(item => item.cartProduct.id === cpId);
        
        if (index !== -1) {
          this.cartProducts.splice(index, 1);
        }
        
        console.log('Product removed from cart');
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  

  checkout(): void {
   
    console.log('Proceeding to checkout...');
  }
}
