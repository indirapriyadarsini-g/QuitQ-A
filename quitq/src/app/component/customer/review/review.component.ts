import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../service/customer.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgClass,NgIf],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit{

  review:any;

  constructor(
    private service:CustomerService
  ){}

  ngOnInit(): void {
    this.service.getMyReviews().subscribe({
      next: (reviewdata) => {
        console.log("reviewdata: ",reviewdata);
        this.review = reviewdata;
      },
      error: (err) => console.log(err)
    })
  }

}
