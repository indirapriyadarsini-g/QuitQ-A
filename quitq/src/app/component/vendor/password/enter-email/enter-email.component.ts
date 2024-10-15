import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LoginNavbarComponent } from '../../auth/login-navbar/login-navbar.component';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../service/user-service.service';

@Component({
  selector: 'app-enter-email',
  standalone: true,
  imports: [LoginNavbarComponent,ReactiveFormsModule,NgIf],
  templateUrl: './enter-email.component.html',
  styleUrl: './enter-email.component.css'
})
export class EnterEmailComponent {
  loginForm:FormGroup
  loginErrMssg:any=undefined;
  successMssg:any=undefined;
  email:string=''

constructor(private route:Router,private userService:UserServiceService){
  this.loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email])
  })
}
onLogin(){
this.email=this.loginForm.value.email
this.userService.confirmEmail(this.email).subscribe({
  next:(data)=>{
    console.log(data)
  },
  error:(error)=>{
    console.log(error)
    if(error.status==200){
this.route.navigate(["vendor/forgot-password",this.email]);
    }
    else{
      this.successMssg=undefined;
      this.loginErrMssg="Vendor does not exist with this username"
    }
  }
})
}
}
