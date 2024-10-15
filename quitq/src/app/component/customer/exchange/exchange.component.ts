import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [],
  templateUrl: './exchange.component.html',
  styleUrl: './exchange.component.css'
})
export class ExchangeComponent implements OnInit{

  opId:any;

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.opId = params.get('opId');
        console.log(this.opId);
      }
    })
  }





}
