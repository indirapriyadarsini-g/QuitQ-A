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

  removeFromCart(productId: number): void {
    
    this.customerService.removeProduct(productId).subscribe(() => {
      this.cartProducts = this.cartProducts.filter(p => p.id !== productId);
    });
  }

  checkout(): void {
   
    console.log('Proceeding to checkout...');
  }
}
