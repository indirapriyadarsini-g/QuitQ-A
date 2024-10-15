import { Component, OnInit } from '@angular/core';
import { GalleriaModule, GalleriaResponsiveOptions } from 'primeng/galleria';
import { ProductWithImageModule } from '../../../../model/product-with-image/product-with-image.module';
import { CustomerService } from '../../../../service/customer.service';
import { Product } from '../../../../model/product/product.module';
import { NavbarComponent } from "../../navbar/navbar.component";
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [GalleriaModule, NavbarComponent,RouterLink],
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

pwi: any;
product:Product;
pId:any;
constructor(
  private customerService: CustomerService,
  private router : Router,
  private route:ActivatedRoute
){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params)=> {
        this.pId = Number(params.get('pId'));
        console.log("received pID",this.pId);
      }
    })
    // this.pwi = this.customerService.getProductSelected();
    // console.log(this.pwi);
    this.fetchProductDetails(this.pId);
    this.fetchCustomerReviews(this.pId);
  }

  fetchCustomerReviews(pId:any){
    this.customerService.getProductReviews(pId).subscribe({
      next: (data) =>{
        this.reviews = data;
        console.log(this.reviews);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  


  fetchProductDetails(pId:any){
    this.customerService.getProductWImage(pId).subscribe({
      next: (pwidata)=> {
        console.log(pwidata);
        this.pwi = pwidata;
        this.images = this.pwi.imList;
        this.product = this.pwi.product;
      }
    })
  }

  isAddedToCart:boolean = false;
  isAddedToWishlist:boolean = false;

  goneToCart(){
    this.isAddedToCart = false;
  }

  goneToWishlist(){
    this.isAddedToWishlist = false;
  }


  addToCart(p: Product) {
    console.log("inside prodDetails ts");
    if(localStorage.getItem('token')!=null){
      this.customerService.addToCart(p).subscribe({
        next: (data) =>{
          console.log("Added");
          this.isAddedToCart = true
        },
        error: (err) => console.log(err)
      })
    }
    else{
      this.router.navigateByUrl("/auth/login");
    }
    
    }

    addToWishlist(product: Product) {

      if(!localStorage.getItem('token')){
        this.router.navigateByUrl("/auth/login");
      }
      else{
        this.customerService.addToWishlist(product).subscribe({
          next: (data) => {
            
            console.log("added to wishlist");
            this.isAddedToWishlist = true;
          },
          error: (err) =>{
            console.log(err);
          }
        })
      }
      
    }

}
