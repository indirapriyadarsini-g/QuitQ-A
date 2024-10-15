import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NgIf } from '@angular/common';
import { LoginNavbarComponent } from '../../auth/login-navbar/login-navbar.component';
import { UserServiceService } from '../../../service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [LoginNavbarComponent,NgIf,ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit {
loginForm:FormGroup
loginErrMssg:string=undefined;
successMssg:string=undefined
;
value:any=0;
valueReceived:any=0;
token:string=''
email:string=''
constructor(private userService:UserServiceService,private route:Router,private activateRoute:ActivatedRoute){
  this.token=localStorage.getItem('token')
  this.loginForm=new FormGroup({
    code:new FormControl('',[Validators.required])
  })
}
ngOnInit(): void {
  this.email=this.activateRoute.snapshot.paramMap.get('email');
  console.log(this.email);

    this.userService.getUserRandomNumber().subscribe({
      next:(data)=>{
        this.valueReceived=data;
        console.log(this.valueReceived)
        /*
        this.userService.sendEmail(this.valueReceived,this.token).subscribe({
          next:(data)=>{
            console.log(data);
          },
          error:(error)=>{
            console.log(error)
          }
        })*/
      },
      error:(error)=>{
console.log(error)
      }
    })
}
onLogin(){
this.value=this.loginForm.value.code;
console.log(this.value)
if(this.value===this.valueReceived){
  console.log("Well done")
  this.loginErrMssg=undefined
  this.successMssg="Well done"
  this.route.navigate(["vendor/reset-password",this.email])
}
else{
  if(this.value==''){
    this.loginErrMssg="You must enter a value"

  }
  else{
this.successMssg=undefined;
this.loginErrMssg="Entered value not same as sent value"
  }

}
}

}
