import { Component } from '@angular/core';
import { LoginNavbarComponent } from '../login-navbar/login-navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VendorServiceService } from '../../../service/vendor-service.service';

@Component({
  selector: 'app-vendor-signup',
  standalone: true,
  imports: [LoginNavbarComponent,NgIf,NgFor,FormsModule],
  templateUrl: './vendor-signup.component.html',
  styleUrl: './vendor-signup.component.css'
})
export class VendorSignupComponent {
successMssg:string=undefined;
errorMssg:string=undefined;
username:string;
password:string;
buissnessName:string;
name:string;
constructor(private vendorService:VendorServiceService){}
resetmsg(){

}
onClick(){
  this.vendorService.addVendor({
    
    "buisnessName":this.buissnessName,
    "name":this.name,
    "user":{
      "username":this.username,
    "password":this.password
    }

  }).subscribe({
    next:(data)=>{
      this.errorMssg="Undefined"
      this.successMssg="Successfully Registered";
    },
    error:(error)=>{
      this.successMssg=undefined
      if(error.status==500)
      {
        this.errorMssg="Vendor Exist Already!!"
      }
      else{
        this.errorMssg="Something went wrong"

      }
    }
  })
}
}
