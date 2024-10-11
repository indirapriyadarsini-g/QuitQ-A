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

  this.customerService.selectedProfile$.subscribe({
    next: (data)=>{
      this.customer = data;
      console.log("Fetched profile details:");
      console.log(data);
    },
    error: (err)=> console.log(err)
  })

  
}


onEdit() {
  // this.customerService.setProfile(this.customer);
this.router.navigateByUrl("/customer/edit-profile");
}

}
