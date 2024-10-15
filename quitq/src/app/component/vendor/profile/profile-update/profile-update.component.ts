import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { VendorServiceService } from '../../../service/vendor-service.service';

@Component({
  selector: 'app-profile-update',
  standalone: true,
  imports: [NavbarComponent,FormsModule,NgFor,NgIf],
  templateUrl: './profile-update.component.html',
  styleUrl: './profile-update.component.css'
})
export class ProfileUpdateComponent {
  name:string;
  buissnessName:string;
  username:string;
  password:string;
  errorMssg:string=undefined;
  id:number;
  successMssg:string=undefined
  constructor(private route:Router,private vendorService:VendorServiceService){
    vendorService.getVendor().subscribe({
      next:(data)=>{
       this.id=data.id;
this.name=data.name,
this.buissnessName=data.buisnessName,
this.username=data.user.username,
this.password=data.user.password


      },
      error:(error)=>{
        this.successMssg=undefined
        console.log(error)
      }
    })
  }

resetmsg(){

}
onClick(){
this.vendorService.updateVendor({
  "name":this.name,
  "buisnessName":this.buissnessName,
  "user":{
    "username":this.username
  }
}).subscribe({
  next:(data)=>{
    this.successMssg="Profile Updated Successfully";
    this.errorMssg=undefined;
  },
  error:(error)=>{
this.successMssg=undefined;
this.errorMssg="Something went wrong"
  }
})
}
}
