import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../service/customer.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-return',
  standalone: true,
  imports: [NavbarComponent,FormsModule,NgIf],
  templateUrl: './return.component.html',
  styleUrl: './return.component.css'
})
export class ReturnComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private service:CustomerService
  ){}

  opId:number=0;
  reason:string="";
  quantity:number=0;

  isReturn:boolean = false;

  ngOnInit(): void {
    this.isReturn = false;
    this.route.paramMap.subscribe({
      next: (params) => {
        this.opId = Number(params.get('opId'));
      },
      error: (err) => console.log(err)
    }) 
  }

  onSubmit(){
    this.service.requestReturn({
      "opId":this.opId,
      "returnReason":this.reason,
      "returnQuantity":this.quantity
    }).subscribe({
      next: ()=> {
        this.isReturn=true;
        console.log("return submitted");
      },
      error: (err) => console.log(err)
    })
  }

  goBack(){
    window.history.back()
  }



}
