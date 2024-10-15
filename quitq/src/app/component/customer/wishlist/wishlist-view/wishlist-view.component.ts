import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { CustomerService } from '../../../../service/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wishlist-view',
  standalone: true,
  imports: [NavbarComponent,NgIf,NgFor],
  templateUrl: './wishlist-view.component.html',
  styleUrl: './wishlist-view.component.css'
})
export class WishlistViewComponent {


  isRemoved:boolean = false;
wlProducts: any;

constructor(private customerService: CustomerService,
  private router:Router
) {}

  ngOnInit(): void {
    this.loadWishlistProducts();
  }

  loadWishlistProducts(): void {
    this.customerService.getWishlistProducts().subscribe({
      next: (products) => {
        console.log(products);
        this.wlProducts = products;
      },
      error: (err) => {
        console.error('Error fetching wishlist products', err);
      }
    }
      
    );
  }
  moveToCart(product: any) {
    if(!localStorage.getItem('token')){
      this.router.navigateByUrl("/auth/login");
    }
    else{
      this.customerService.addToCart(product).subscribe({
        next: (data) => {
          console.log("added to cart");
          // alert("Added to cart");
        },
        error: (err) =>{
          console.log(err);
        }
      })
    }
  }

removeFromWishlist(wpId: number): void {
    this.isRemoved = true;
  this.customerService.removeFromWishlist(wpId).subscribe(() => {
    this.wlProducts = this.wlProducts.filter(p => p.id !== wpId);
    this.loadWishlistProducts();
  });
}

}
