import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './vendor-dashboard.component.html',
  styleUrl: './vendor-dashboard.component.css'
})
export class VendorDashboardComponent {
  constructor(private route:Router){}
productStats(){
  this.route.navigateByUrl("vendor/product-stats")
}
categoryStats(){
  this.route.navigateByUrl("vendor/category-stats")

}
orderStats(){
  this.route.navigateByUrl("vendor/order-stats")

}
}
