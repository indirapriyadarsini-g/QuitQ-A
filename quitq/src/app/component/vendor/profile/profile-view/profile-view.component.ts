import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Router } from '@angular/router';
import { VendorServiceService } from '../../../service/vendor-service.service';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css'
})
export class ProfileViewComponent {
  name:string;
  buissnessName:string;
  username:string;
  password:string;
  constructor(private route:Router,private vendorService:VendorServiceService){
    vendorService.getVendor().subscribe({
      next:(data)=>{
this.name=data.name,
this.buissnessName=data.buisnessName,
this.username=data.user.username,
this.password=data.user.password


      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

resetmsg(){

}
onUpdate(){
this.route.navigateByUrl("vendor/profile-update")
}

}
