import { Component } from '@angular/core';
import { ProductDetailsComponent } from "../../product/product-details/product-details.component";

@Component({
  selector: 'app-cart-product',
  standalone: true,
  imports: [ProductDetailsComponent],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.css'
})
export class CartProductComponent {
onConfirmRemoveFromCart(arg0: any) {
throw new Error('Method not implemented.');
}
product: any;
onMoveToWishlist(arg0: any) {
throw new Error('Method not implemented.');
}

}
