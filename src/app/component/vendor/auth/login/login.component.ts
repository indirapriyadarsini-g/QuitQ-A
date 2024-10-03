import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../service/user-service.service';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm:FormGroup;
token:string;
loginErrMssg:string=""
user:User;
constructor(private userService:UserServiceService,private router:Router){
 this.loginForm=new FormGroup({
  username:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',Validators.required)
 })
}
onLogin(){
  this.userService.getToken( this.loginForm.value.username,  this.loginForm.value.password)
  .subscribe({
          next: (data)=>{
          this.token = data.token; 
            console.log("Token="+this.token)
            this.userService.getUserDetails(this.token).subscribe({
              next:(data)=>{
this.user=data;
console.log(this.user);
localStorage.setItem('token',this.token);
localStorage.setItem('username',this.user.username);
localStorage.setItem('role',this.user.role);
switch(this.user.role){
  case 'ROLE_VENDOR':
  this.router.navigateByUrl("/vendor/dashboard");
}
              },
              error:(error)=>{
                console.log(error)
              }
            })
          },
          error:(err)=>{
            console.log('in error....'+err)
            this.loginErrMssg = 'Invalid Credentials'; 
          }
        })
}

}
