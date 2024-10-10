import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../model/user/user.module';
import { UserService } from '../../../service/user.service';
import { NgIf } from '@angular/common';
import { NavbarComponent } from "../../customer/navbar/navbar.component";
import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";


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

  constructor(private userService: UserService, private router: Router){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.email]), 
      password: new FormControl('', Validators.required)
    });
  }

  onLogin(){
    
    this.userService.getToken( this.loginForm.value.username,  this.loginForm.value.password)
    .subscribe({  
            next: (data)=>{
            this.token = data.token; 
            this.userService.getUserDetails(this.token)
            .subscribe({
              next:(data)=>{
                this.user = data;
                // save username in local storage 
                localStorage.setItem('token',this.token );
                localStorage.setItem('username',this.user.username );
                localStorage.setItem('role',this.user.role );
                switch(this.user.role){
                 
                  case 'ROLE_CUSTOMER':
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
              console.log('in error....')
              this.loginErrMsg = 'Invalid Credentials'; 
            }
          })
  }

}
