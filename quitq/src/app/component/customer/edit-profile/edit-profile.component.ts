import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CustomerService } from '../../../service/customer.service';
import { RouterLink } from '@angular/router';
import { InputOtpModule } from 'primeng/inputotp';
import { Customer } from '../../../model/customer/customer.module';
import { User } from '../../../model/user/user.module';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [NavbarComponent, 
    InputOtpModule,
    RouterLink,
    PasswordModule,
    FormsModule,
    StepperModule,
    ButtonModule,
    InputTextModule,
    ToggleButtonModule,
    IconFieldModule,
    InputIconModule,
    CommonModule],
  templateUrl: './edit-profile.component.html',
  styles: [
    `.p-stepper {
        flex-basis: 40rem;
    } 
    `
],
   styleUrl: './edit-profile.component.css' 
})
export class EditProfileComponent implements OnInit{

  constructor(
    private service: CustomerService
  ){}

  customer:Customer;

  ngOnInit(): void {
    this.service.selectedProfile$.subscribe({
      next: (data) =>{
        this.name = data.name;
        this.email = data.user.username;
        this.contact = data.contact;
        this.customer = data;
        console.log("on init")
        console.log(data);
      },
      error: (err) => console.log(err)
    })
  }

 

  name: string = null;
  email: string = null;
  contact:string =null;
  password: string = null;

  

  setCustomer(){
    console.log(this.contact);

    // this.customer = new Customer();
    // this.customer.contact = this.contact;
    // this.customer.name = this.name;
    // this.customer.user = this.customer.user || new User();
    // this.customer.user.username = localStorage.getItem('username');
    // this.customer.user.role = localStorage.getItem('role');


    this.service.setProfile({
      "id":this.customer.id,
      "name":this.name,
      "contact":this.contact,
      "user": this.customer.user
    });
  }

  streetDetails:string=null;
  landmark:string=null;
  city:string = null;
  state:string = null;
  length:number = 6;
  pincode:string = null;

  setAddress(){
    this.service.setAddress({
      "streetDetails": this.streetDetails,
      "landmark":this.landmark,
      "city":this.city,
      "state":this.state,
      "pincode":this.pincode
    })
  }

  
  address:any;

  submitProfile(){
    // this.service.selectedProfile$.subscribe({
    //   next: (data) =>{
        console.log("on submitting");
        // console.log(data);
    //     this.customer = data;
    console.log(this.customer);
    this.service.setProfile(this.customer);
        this.service.registerProfile(this.customer);
    //   },
    //   error: (err) => console.log(err)
    // })

    

    // this.service.selectedAddress$.subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     this.address = data;
    this.service.setAddress(this.address);
        this.service.addAddress(this.address);
  //     },
  //     error: (err) => console.log(err)
  //   })

  }

  active:number = 0;

    



}
