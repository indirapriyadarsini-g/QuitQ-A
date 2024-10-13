import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../model/user/user.module';
import { UserService } from '../../../service/user.service';
import { NgIf } from '@angular/common';
import { NavbarComponent } from "../../customer/navbar/navbar.component";
import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";
import { CustomerService } from '../../../service/customer.service';
import { Customer } from '../../../model/customer/customer.module';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, RouterLink, ReactiveFormsModule, NavbarComponent, LoginNavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
signup() {
this.router.navigateByUrl("/auth/signup");
}

  loginForm: FormGroup;
  token:string=''; 
  loginErrMsg:string='';
  user: User; 

  constructor(private userService: UserService, 
    private customerService: CustomerService,private router: Router){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.email]), 
      password: new FormControl('', Validators.required)
    });
  }

  customer:Customer;

  onLogin(){
    
    this.userService.getToken( this.loginForm.value.username,  this.loginForm.value.password)
    .subscribe({  
            next: (tdata)=>{
            this.token = tdata.token; 
            this.userService.getUserDetails(this.token)
            .subscribe({
              next:(udata)=>{
                this.user = udata;
                // save username in local storage 
                console.log(this.token);
                localStorage.setItem('token',this.token );
                localStorage.setItem('username',this.user.username );
                localStorage.setItem('role',this.user.role );
                switch(this.user.role){
                 
                  case 'ROLE_CUSTOMER':
                    // this.setCustomerProfile();
                    // this.setCustomerAddress();
                    // this.setCustomerCart();
                    // this.setCustomerWishlist();
                    this.router.navigateByUrl('/customer/home')
                    
                    break; 
                  default:
                    this.router.navigateByUrl('/page-not-found')
                    break; 
                } 
              },
              error:(err)=>{
                console.log(err)
              }
            })
            },
            error:(err)=>{
              console.log(err)
              this.loginErrMsg = 'Invalid Credentials'; 
            }
          })


          
  }

  setCustomerProfile(){
    this.customerService.viewProfile().subscribe({
      next: (prof) => {
        this.customer = prof;  
        console.log("initial setup of profile");       
        this.customerService.setProfile(this.customer);
        console.log("customer profile after login");
        console.log(this.customer);
      },
      error: (err) => console.log(err)
    })
  }

  setCustomerAddress(){
    this.customerService.viewAddress().subscribe({
      next: (add) => {
        console.log("initial setup of address"); 
        console.log(add);
        this.customerService.setAddress(add);
      },
      error: (err) => console.log(err)
    })
  }

  setCustomerCart(){
    this.customerService.getCartInfo().subscribe({
      next: (cartdata) => {
        console.log("initial setup of cart");
        console.log(cartdata);
        this.customerService.setCart(cartdata);
      },
      error: (err) => console.log(err)
    })
  }

  setCustomerWishlist(){
    this.customerService.getWishlistProducts().subscribe({
      next: (wdata) => {
        console.log("initial setup of wishlist");
        console.log(wdata);
        this.customerService.setWishlist(wdata);
      },
      error: (err) => console.log(err)
    })
  }

}
