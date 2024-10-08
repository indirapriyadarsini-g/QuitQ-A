import { Component, OnInit } from '@angular/core';
import { GalleriaModule, GalleriaResponsiveOptions } from 'primeng/galleria';
import { ProductWithImageModule } from '../../../../model/product-with-image/product-with-image.module';
import { CustomerService } from '../../../../service/customer.service';
import { Product } from '../../../../model/product/product.module';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [GalleriaModule, NavbarComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
images: any[];
responsiveOptions: GalleriaResponsiveOptions[];

reviews: any;
handleImageChange($event: Event) {
throw new Error('Method not implemented.');
}

pwi: ProductWithImageModule;
product:Product;
constructor(
  private customerService: CustomerService
){}

  ngOnInit(): void {
    this.pwi = this.customerService.getProductSelected();
    console.log(this.pwi);
    this.images = this.pwi.imageList;
    this.product = this.pwi.product;
    this.customerService.getProductReviews(this.pwi.product.id).subscribe({
      next: (data) =>{
        this.reviews = data;
        console.log(this.reviews);
      },
      error: (err) => {
        console.log(err);
      }
    })
    console.log(this.pwi);
  }


}
