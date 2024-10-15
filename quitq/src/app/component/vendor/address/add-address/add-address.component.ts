import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { VendorAddressServiceService } from '../../../service/vendor-address-service.service';

@Component({
  selector: 'app-add-address',
  standalone: true,
  imports: [NavbarComponent,FormsModule,NgFor,NgIf],
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css'
})
export class AddAddressComponent {
  constructor(private addressService:VendorAddressServiceService){}
  cover:boolean=false
  status:string="";
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
onClick(){
  if(this.cover===true){
    this.status="active";
  }
  else{
    this.status="inactive"
  }
  this.addressService.addAddress({
    "city":this.city,
    "state":this.states,
    "pincode":this.pincode,
    "landmark":this.landmark,
    "status":this.status,
    "streetdetails":this.streetDetails
    
  }).subscribe({
    next:(data)=>{
      this.errorMssg=undefined;
this.successMssg="Address Addded Successfully"
    },
    error:(error)=>{
      this.successMssg=undefined;
      this.errorMssg="Error Occured"
    }
  })
}
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
}
