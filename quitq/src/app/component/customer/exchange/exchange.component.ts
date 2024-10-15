import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../service/customer.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [FormsModule, NavbarComponent,NgIf],
  templateUrl: './exchange.component.html',
  styleUrl: './exchange.component.css'
})
export class ExchangeComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private service:CustomerService
  ){}

  opId:number=0;
  reason:string="";
  quantity:number=0;

  isReturn:boolean = false;
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.opId = Number(params.get('opId'));
        console.log(this.opId);
      }
    })
  }

  onSubmit(){
    this.service.requestExchange({
      "opId":this.opId,
      "exchangeReason":this.reason,
      "exchangeQuantity":this.quantity
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
