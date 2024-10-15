import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { CustomerService } from '../../../../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgIf],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent {
  cartProducts: any[] = [];
  cart: any = null;
  constructor(private customerService: CustomerService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.loadCartProducts();
    this.loadCart();
    this.isRemoved = false;
  }
 
  loadCartProducts(): void {
    this.customerService.getCartProducts().subscribe({
      next: (products) => {
        console.log("cart prods:",products);
        this.cartProducts = products;

        this.loadCart();

      },
      error: (err) => {
        console.error('Error fetching cart products', err);
      }
    }
      
    );
  }

  loadCart():void{
    this.customerService.getCartInfo().subscribe({
      next: (cartdata) => {
        console.log("Cart:");
        console.log(cartdata)
        this.cart = cartdata;
        
      },
      error: (err) => console.log(err)
    })
  }

  getTotalItems(): number{
    return this.cart.cartQuantity;
    // return this.cartProducts.reduce((sum, product) => sum + product.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cart.cartTotal;
    // return this.cartProducts.reduce((sum, product) => sum + product.quantity * product.price, 0);
  }
isRemoved:boolean = false;
  removeFromCart(cpId: number): void {
    this.customerService.removeFromCart(cpId).subscribe({
      next: (data) => {
        console.log(data);
        
        const index = this.cartProducts.findIndex(item => item.cartProduct.id === cpId);
        
        if (index !== -1) {
          this.cartProducts.splice(index, 1);
        }        
        this.isRemoved = true;

        this.refreshCart();

        console.log('Product removed from cart');
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  
  refreshCart(){
    this.customerService.getCartProducts().subscribe({
      next: (cpdata) =>{
        console.log("after refreshing");
        console.log(cpdata);
        this.cartProducts = cpdata;
      },
      error: (err)=>console.log(err)
    })
  }

  checkout(): void {
    this.customerService.order().subscribe({
      next: (orderdata)=>{
        console.log("Ordered data:");
        console.log(orderdata);
        const orderId = orderdata.order.id;
        this.router.navigate(['customer/order-summary',orderId]);
      }
    })
    console.log('Proceeding to checkout...');
  }
}
