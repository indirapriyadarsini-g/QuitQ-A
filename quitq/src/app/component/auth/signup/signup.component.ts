import { Component } from '@angular/core';
import { NavbarComponent } from "../../customer/navbar/navbar.component";
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { UserService } from '../../../service/user.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../../model/user/user.module';
import { LoginNavbarComponent } from "../login-navbar/login-navbar.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, NgIf, LoginNavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

signupErrMsg: string = '';
signupSuccessMsg: string = '';
loginForm: FormGroup;

signupBody: User;

  constructor(private userService: UserService, private router: Router){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.email]), 
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.router.navigateByUrl("/auth/login");
    }
  onSignup(loginForm:FormGroup) {
    var username= loginForm.get('username').value;
    var password= loginForm.get('password').value;
    // this.signupBody.role = 'ROLE_CUSTOMER';

    this.userService.signup(username, password).subscribe({
      next: ()=> {
        this.signupSuccessMsg = 'Signed up';
        this.signupErrMsg = '';
      },
      error: ()=> {this.signupErrMsg='Signup failed';
        this.signupSuccessMsg='';
      }
    })
  }
  


}
