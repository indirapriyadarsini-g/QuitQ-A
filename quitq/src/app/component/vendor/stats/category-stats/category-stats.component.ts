import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from '../../../service/product-service.service';

@Component({
  selector: 'app-category-stats',
  standalone: true,
  imports: [NavbarComponent,ChartModule,FormsModule],
  templateUrl: './category-stats.component.html',
  styleUrl: './category-stats.component.css'
})
export class CategoryStatsComponent implements OnInit {
  data: any;
labels:any;
    options: any;
    labelsApi:any[]=[];
numberApi:any[]=[];
products:any[]=[];
sum:number=0;
    title:string='';
total:any;
    resetmsg(){}
constructor(private productService:ProductServiceService){
    
}
ngOnInit(): void {
    this.productService.categoryStats().subscribe({
        next:(data)=>{
            console.log(data);
            this.products=data;
          for(let p of this.products){
            this.labelsApi.push(p.title);
            this.numberApi.push(p.number);
            this.sum=this.sum+p.number;
          }
            
        },
        error:(error)=>{
            console.log(error)
        }
    })
    
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');

  this.data = {
      labels: this.labelsApi,
      datasets: [
          {
              data: this.numberApi,
              backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
              hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
          }
      ]
  };

  this.options = {
      plugins: {
          legend: {
              labels: {
                  usePointStyle: true,
                  color: textColor
              }
          }
      }
  };
        
    
}
}
