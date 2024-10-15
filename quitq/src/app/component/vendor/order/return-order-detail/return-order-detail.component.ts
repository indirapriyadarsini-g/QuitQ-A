import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { OrderServiceService } from '../../../service/order-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-return-order-detail',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './return-order-detail.component.html',
  styleUrl: './return-order-detail.component.css'
})
export class ReturnOrderDetailComponent implements OnInit {
  id:number;
  return:any[]=[]
  constructor(private orderService:OrderServiceService,private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
      this.fetchData();
      this.id=parseInt(this.activeRoute.snapshot.paramMap.get('id'))
  }
  fetchData(){
    this.orderService.showReturnProduct().subscribe({
      next:(data)=>{
        this.return=data;
        this.filterData();
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
  filterData(){
    console.log(this.return)
    console.log(this.id)
    this.return=this.return.filter(r=>
      r.id===this.id
    )
    console.log(this.return)
  }

}
