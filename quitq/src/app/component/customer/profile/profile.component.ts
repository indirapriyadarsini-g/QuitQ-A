import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router, RouterLink } from '@angular/router';
import { CustomerService } from '../../../service/customer.service';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{


  constructor(
    private customerService: CustomerService,
    private router: Router
  ){}

  customer:any;
  
ngOnInit(): void {
  this.fetchProfileDetails();
  
}

fetchProfileDetails(){
  this.customerService.viewProfile().subscribe({
    next: (data) => {
      this.customer = data;
      if(this.customer.name == null){
        this.customer.name = "Not Registered"
        this.customer.contact = "Not Registered"
      }
      console.log(this.customer);
    },
    error: (err) => console.log(err)
  })
}


onEdit() {
this.router.navigateByUrl("/customer/edit-profile");
}

}
