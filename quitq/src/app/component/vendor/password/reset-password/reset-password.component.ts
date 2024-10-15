import { Component, OnInit } from '@angular/core';
import { LoginNavbarComponent } from '../../auth/login-navbar/login-navbar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { UserServiceService } from '../../../service/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [LoginNavbarComponent,ReactiveFormsModule,NgIf],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {
  loginForm:FormGroup;
  loginErrMssg:any=undefined;
  successMssg:any=undefined;
  oldPassword:any;
  newPassword:any
  email:any=''

  constructor(private userService:UserServiceService,private activateRoute:ActivatedRoute){
    this.loginForm=new FormGroup({
      password:new FormControl('',Validators.required)
     })
    }
    ngOnInit(): void {
       this.email=this.activateRoute.snapshot.paramMap.get('email'); 
    }
    onLogin(){
this.newPassword=this.loginForm.value.password;
console.log(this.newPassword)

this.userService.oldPassword(this.email,this.newPassword).subscribe({
  next:(data)=>{
    this.successMssg="Password updated successfully";
    this.loginErrMssg=undefined;
    console.log(data)
  },
  error:(data)=>{
    this.loginErrMssg="Something went wrong"
    this.successMssg=undefined
    console.log(data)
  }
})
    }
  }



