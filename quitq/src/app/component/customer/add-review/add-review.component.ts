import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CustomerService } from '../../../service/customer.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [NavbarComponent,FormsModule,RatingModule,NgIf,RouterLink],
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.css'
})
export class AddReviewComponent implements OnInit{

  pId:any;
  isAdded:boolean = false;
  constructor(
    private route:ActivatedRoute,
    private service: CustomerService
  ){}

  ngOnInit(): void {
    this.isAdded = false;
    this.route.paramMap.subscribe({
      next: (params) =>{
        this.pId = params.get('pId');
        console.log(this.pId);
      }
    })
  }

  review = {
    stars: 0,
    content: ''
  };

  submitReview() {
    console.log('Review Submitted:', this.review);
    this.service.addReview(this.pId,{
      "stars":this.review.stars,
      "reviewContent":this.review.content,
      "customer":{
        "user":{
          "username":localStorage.getItem('username')
        }
      },
      "product":{
        "id":this.pId
      }
    }).subscribe({
      next: (data) => {
        console.log(data);
        this.isAdded=true;
      },
      error: (err) => console.log(err)
    })
  }
}
