import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorAddressServiceService } from '../../../service/vendor-address-service.service';

@Component({
  selector: 'app-view-address',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgIf,FormsModule],
  templateUrl: './view-address.component.html',
  styleUrl: './view-address.component.css'
})
export class ViewAddressComponent {
  constructor(private route:Router,private addressService:VendorAddressServiceService){
this.addressService.allAddresses().subscribe({
  next:(data)=>{
    this.addressess=data;
    console.log(this.addressess)
  },
  error:(error)=>{
    console.log(error)
  }
})
  }
addressess:any[]=['Addresss1','Address2','Address3'];
address:any="";
cover:boolean=false;
aid:any;
onSelect(a:any){
  this.states=a.state;
  this.aid=a.aid;
  this.city=a.city;
  this.landmark=a.landmark;
  this.streetDetails=a.streetdetails;
  this.pincode=a.pincode;
if(a.status=="active"){
  this.cover=true;
}
else{
  this.cover=false;
}
}

errorMssg:string=undefined;
successMssg=undefined;
city:string="";
state:any[] = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry"
];
states:any=""
streetDetails:"";
pincode:number;
landmark:string=""
cities:any[]=[];
resetmsg(){}
onClick(){}
onChange(state:any){
switch(state){
  case "Maharashtra":{
this.cities=['Mumbai','Pune','NagPur','KolhaPur']
break;
  }
  case "Madhya Pradesh":{
this.cities=['Alirajpur',
    'Anuppur',
    'Ashok Nagar',
    'Balaghat',
    'Barwani',
    'Betul',
    'Bhind',
    'Bhopal',
    'Burhanpur',
    'Chhatarpur',
    'Chhindwara',
    'Damoh',
    'Datia',
    'Dewas',
    'Dhar',
    'Dindori',
    'Guna',
    'Gwalior',
    'Harda',
    'Hoshangabad',
    'Indore',
    'Jabalpur',
    'Jhabua',
    'Katni',
    'Khandwa (East Nimar)',
    'Khargone (West Nimar)',
    'Mandla',
    'Mandsaur',
    'Morena',
    'Narsinghpur',
    'Neemuch',
    'Panna',
    'Rewa',
    'Rajgarh',
    'Ratlam',
    'Raisen',
    'Sagar',
    'Satna',
    'Sehore',
    'Seoni',
    'Shahdol',
    'Shajapur',
    'Sheopur',
    'Shivpuri',
    'Sidhi',
    'Singrauli',
    'Tikamgarh',
    'Ujjain',
    'Umaria',
    'Vidisha']
  }
}
}
onChangeCity(city:any){}
onUpdate(){
  this.addressService.updateStatus(this.aid,"active").subscribe({
    next:(data)=>{
      console.log(data);
    },
    error:(error)=>{
      console.log(error)
      if(error.status===200){
        this.cover=true;
        
        for(let a of this.addressess){
          if(a.aid===this.aid){
            a.status='active'
          }
          else{
            if(a.status==='active'){
              a.status='inactive';
            }
          }
        }
      }
    }
  })
}
onAdd(){
this.route.navigateByUrl("vendor/add-address")
}
onDelete(){
  console.log(this.aid)
  let id=this.aid
  this.addressService.deleteAddress(this.aid).subscribe({
    next:(data)=>{
      console.log(data);
    },
    error:(error)=>{
      if(error.status===200){
        this.successMssg="Address Deleted Successfully";
        this.errorMssg=undefined;
        this.aid=undefined;
        this.city=undefined;
        this.states=undefined;
        this.city=undefined;
        this.landmark=undefined;
        this.streetDetails=undefined;
        this.addressess=this.addressess.filter(a=>
          a.aid!=id
         )
console.log("Aid="+id)

      }
      else{
        this.errorMssg="Something went wrong";
        this.successMssg=undefined;
      }
    }
  })
}
}
