import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { CustomerService } from '../../../../service/customer.service';


@Component({
  selector: 'app-wishlist-view',
  standalone: true,
  imports: [NavbarComponent,NgIf,NgFor],
  templateUrl: './wishlist-view.component.html',
  styleUrl: './wishlist-view.component.css'
})
export class WishlistViewComponent {
wlProducts: any;

constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadWishlistProducts();
  }

  loadWishlistProducts(): void {
    this.customerService.getCartProducts().subscribe({
      next: (products) => {
        this.wlProducts = products;
      },
      error: (err) => {
        console.error('Error fetching wishlist products', err);
      }
    }
      
    );
  }
removeFromWishlist(productId: number): void {
    
  this.customerService.removeProduct(productId).subscribe(() => {
    this.wlProducts = this.wlProducts.filter(p => p.id !== productId);
  });
}

}
