import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../../service/customer.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-address-view',
  standalone: true,
  imports: [FormsModule, NavbarComponent,NgIf, RouterLink],
  templateUrl: './address-view.component.html',
  styleUrl: './address-view.component.css'
})
export class AddressViewComponent implements OnInit{

  address:any;
  street:string="";
  landmark:string="";
  city:string="";
  state:string="";
  pincode:string="";

  constructor(
    private service: CustomerService
  ){}

  isSubmit:boolean = false;
  ngOnInit(): void {
    this.isSubmit = false;
    this.service.viewAddress().subscribe({
      next: (addressdata)=>{
        console.log("retrieved address:",addressdata);
        this.street = addressdata[addressdata.length-1].streetDetails;
        this.landmark = addressdata[addressdata.length-1].landmark;
        this.city = addressdata[addressdata.length-1].city;
        this.state = addressdata[addressdata.length-1].state;
        this.pincode = addressdata[addressdata.length-1].pincode;
      }
    })
  }



  onSubmit() {
    this.service.addAddress({
      "streetdetails":this.street,
      "landmark":this.landmark,
      "city":this.city,
      "state":this.state,
      "pincode":this.pincode
    }).subscribe({
      next: ()=>{
        this.isSubmit = true;
        console.log("address added");
      },
      error: (err) => console.log(err)
    })
  } 



}
