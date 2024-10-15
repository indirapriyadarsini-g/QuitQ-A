import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { ChartModule } from 'primeng/chart';
import { OrderServiceService } from '../../../service/order-service.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-order-stats',
  standalone: true,
  imports: [NavbarComponent,ChartModule,FormsModule],
  templateUrl: './order-stats.component.html',
  styleUrl: './order-stats.component.css'
})
export class OrderStatsComponent implements OnInit {
  data: any;

  options: any;
  basicData: any;

  basicOptions: any;
  basicData1:any;
  basicOptions1:any;
  year:any;
  statsApi:any[]=[];
  numberApi:any[]=[];

  sum:number=0;
  ordersStatsApi:any[]=[];
  orderNumberApi:any[]=[];
  salesStatsApi:any[]=[];
  salesNumberApi:any[]=[];
  totalSales:number=0;

  onYearBar(){
    this.ordersStatsApi=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
    this.orderNumberApi=[0,0,0,0,0,0,0,0,0,0,0,0];
this.orderService.getNoOfOrderReceivedMonth().subscribe({
    next:(data)=>{
        console.log(data);
        for(let d of data){
            console.log(d.status)
          
     if(d.status==='1'){
        this.orderNumberApi[0]=d.number;
     }
     if(d.status==='2'){
        this.orderNumberApi[1]=d.number;
     }
     if(d.status==='3'){
        this.orderNumberApi[2]=d.number;
     }
     if(d.status==='4'){
        this.orderNumberApi[3]=d.number;
     }
     if(d.status==='5'){
        this.orderNumberApi[4]=d.number;
     }
     if(d.status==='6'){
        this.orderNumberApi[5]=d.number;
     }
     if(d.status==='7'){
        this.orderNumberApi[6]=d.number;
     }
     if(d.status==='8'){
        this.orderNumberApi[7]=d.number;
     }
     if(d.status==='9'){
        this.orderNumberApi[8]=d.number;
     }
     if(d.status==='10'){
        this.orderNumberApi[9]=d.number;
     }
     if(d.status==='11'){
        this.orderNumberApi[10]=d.number;
     }
     if(d.status==='12'){
        this.orderNumberApi[11]=d.number;
     }
        }
    },
    error:(error)=>{
        console.log(error);
    }
})
const documentStyle = getComputedStyle(document.documentElement);
const textColor = documentStyle.getPropertyValue('--text-color');
const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

this.basicData = {
    labels: this.ordersStatsApi,
    datasets: [
        {
            label: 'No Of Orders Received',
            data: this.orderNumberApi,
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            borderWidth: 1
        }
    ]
};

this.basicOptions = {
    plugins: {
        legend: {
            labels: {
                color: textColor
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        },
        x: {
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        }
    }
};
  }
  onMonthBar(){
    this.ordersStatsApi=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
    this.orderNumberApi=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
this.orderService.getNoOfOrdersReceivedDate().subscribe({
    next:(data)=>{
        console.log(data);
        for(let d of data){
          
     if(d.status==='1'){
        this.orderNumberApi[0]=d.number;
     }
     if(d.status==='2'){
        this.orderNumberApi[1]=d.number;
     }
     if(d.status==='3'){
        this.orderNumberApi[2]=d.number;
     }
     if(d.status==='4'){
        this.orderNumberApi[3]=d.number;
     }
     if(d.status==='5'){
        this.orderNumberApi[4]=d.number;
     }
     if(d.status==='6'){
        this.orderNumberApi[5]=d.number;
     }
     if(d.status==='7'){
        this.orderNumberApi[6]=d.number;
     }
     if(d.status==='8'){
        this.orderNumberApi[7]=d.number;
     }
     if(d.status==='9'){
        this.orderNumberApi[8]=d.number;
     }
     if(d.status==='10'){
        this.orderNumberApi[9]=d.number;
     }
     if(d.status==='11'){
        this.orderNumberApi[10]=d.number;
     }
     if(d.status==='12'){
        this.orderNumberApi[11]=d.number;
     }
     if(d.status==='13'){
        this.orderNumberApi[12]=d.number;
     }
     if(d.status==='14'){
        this.orderNumberApi[13]=d.number;
     }
     if(d.status==='15'){
        this.orderNumberApi[14]=d.number;
     }
     if(d.status==='16'){
        this.orderNumberApi[15]=d.number;
     }
     if(d.status==='17'){
        this.orderNumberApi[16]=d.number;
     }
     if(d.status==='18'){
        this.orderNumberApi[17]=d.number;
     }
     if(d.status==='19'){
        this.orderNumberApi[18]=d.number;
     }
     if(d.status==='20'){
        this.orderNumberApi[19]=d.number;
     }
     if(d.status==='21'){
        this.orderNumberApi[20]=d.number;
     }
     if(d.status==='22'){
        this.orderNumberApi[21]=d.number;
     }
     if(d.status==='23'){
        this.orderNumberApi[22]=d.number;
     }
     if(d.status==='24'){
        this.orderNumberApi[23]=d.number;
     }
     if(d.status==='25'){
        this.orderNumberApi[24]=d.number;
     }
     if(d.status==='26'){
        this.orderNumberApi[25]=d.number;
     }
        }
    },
    error:(error)=>{
        console.log(error);
    }
})
const documentStyle = getComputedStyle(document.documentElement);
const textColor = documentStyle.getPropertyValue('--text-color');
const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

this.basicData = {
    labels: this.ordersStatsApi,
    datasets: [
        {
            label: 'No Of Orders Received',
            data: this.orderNumberApi,
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)',],
            borderWidth: 1
        }
    ]
};

this.basicOptions = {
    plugins: {
        legend: {
            labels: {
                color: textColor
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        },
        x: {
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        }
    }
};
  }
  constructor(private orderService:OrderServiceService){}
  onMonth(){
    this.statsApi=[];
    this.numberApi=[];
    this.sum=0;
    this.orderService.getOrderProductStatsMonth().subscribe({
        next:(data)=>{
for(let d of data){
    console.log(d);
    this.statsApi.push(d.status)
    this.numberApi.push(d.number)
    this.sum=this.sum+d.number;
}  
const documentStyle = getComputedStyle(document.documentElement);
const textColor = documentStyle.getPropertyValue('--text-color');

this.data = {
    labels: this.statsApi,
    datasets: [
        {
            data: this.numberApi,
            backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'),documentStyle.getPropertyValue('--red-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400'),documentStyle.getPropertyValue('--red-500')]
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
        },
        error:(error)=>{
            console.log(error);
        }
    })
  }
onYear(){
    this.statsApi=[];
    this.numberApi=[];
    this.sum=0;
    this.orderService.getOrderProductStats().subscribe({
        next:(data)=>{
for(let d of data){
    console.log(d);
    this.statsApi.push(d.status)
    this.numberApi.push(d.number)
    this.sum=this.sum+d.number;
}  
const documentStyle = getComputedStyle(document.documentElement);
const textColor = documentStyle.getPropertyValue('--text-color');

this.data = {
    labels: this.statsApi,
    datasets: [
        {
            data: this.numberApi,
            backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'),documentStyle.getPropertyValue('--red-500')],
            hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400'),documentStyle.getPropertyValue('--red-500')]
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
        },
        error:(error)=>{
            console.log(error);
        }
    })
}
onWeek(){
    let todaysDate= new Date();
    let todaysDay = new Date().getDay(); 
    let startDate = new Date(todaysDate.setDate(todaysDate.getDate() - (todaysDay)))
    let todaysDate1 = new Date();
    let endDate = new Date(todaysDate1.setDate(todaysDate1.getDate() + (7-todaysDay)))
    let fromDate = startDate.toISOString().split('T')[0]; 
    let toDate=endDate.toISOString().split('T')[0]; 
    console.log(fromDate);
    console.log(toDate);

}
  ngOnInit(): void {
 this.onYear();
this.onYearBar();
 this.onYearBar1();
      
  }
onChange(y:any){
    switch(y){
        case "YEAR":{
            console.log("Year click")
            this.onYear();
            break;
        }
        case "MONTH":{
            console.log("Month")
            this.onMonth();
            break;
        }
        case "WEEK":{
            console.log("WEEK")
            this.onWeek();
            break;
        }
    }
}
onBarChange(y:any){
    switch(y){
        case "YEAR":{
            console.log("Year click")
            this.onYearBar();
            break;
        }
        case "MONTH":{
            console.log("Month")
            this.onMonthBar();
            break;
        }
       
    }  
}
onBarChange1(y:any){
    switch(y){
        case "YEAR":{
            console.log("Year click")
            this.onYearBar1();
            break;
        }
        case "MONTH":{
            console.log("Month")
            this.onMonthBar1();
            break;
        }
       
    }  
}
onYearBar1(){
    this.totalSales=0;
    this.salesStatsApi=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
    this.salesNumberApi=[0,0,0,0,0,0,0,0,0,0,0,0];
this.orderService.getSalesMonth().subscribe({
    next:(data)=>{
        for(let d of data){
            this.totalSales=this.totalSales+d.price;

          if(d.price<1000000){
            d.price=1000000
          }
     if(d.status==='1'){
        this.salesNumberApi[0]=d.price;
     }
     if(d.status==='2'){
        this.salesNumberApi[1]=d.price;
     }
     if(d.status==='3'){
        this.salesNumberApi[2]=d.price;
     }
     if(d.status==='4'){
        this.salesNumberApi[3]=d.price;
     }
     if(d.status==='5'){
        this.salesNumberApi[4]=d.price;
     }
     if(d.status==='6'){
        this.salesNumberApi[5]=d.price;
     }
     if(d.status==='7'){
        this.salesNumberApi[6]=d.price;
     }
     if(d.status==='8'){
        this.salesNumberApi[7]=d.price;
     }
     if(d.status==='9'){
        this.salesNumberApi[8]=d.price;
     }
     if(d.status==='10'){

        this.salesNumberApi[9]=d.price;
        console.log(d.price)
     }
     if(d.status==='11'){
        this.salesNumberApi[10]=d.price;
     }
     if(d.status==='12'){
        this.salesNumberApi[11]=d.price;
     }
        }
    },
    error:(error)=>{
        console.log("Error=",error);
    }
})
const documentStyle = getComputedStyle(document.documentElement);
const textColor = documentStyle.getPropertyValue('--text-color');
const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
this.basicData1 = {
    labels: this.salesStatsApi,
    datasets: [
        {
            label: 'Sales 1Lakh may mean sales<1000000',
            data: this.salesNumberApi,
            
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            borderWidth: 1
        }
    ]
};
this.basicOptions1 = {
    plugins: {
        legend: {
            labels: {
                color: textColor
            }
        }
    },
    scales: {
        y: {
            beginAtZero: false,
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        },
        x: {
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        }
    }
};
}
onMonthBar1(){
this.totalSales=0;
    this.salesStatsApi=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
    this.salesNumberApi=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
this.orderService.getSalesDate().subscribe({
    next:(data)=>{
        console.log(data);
        for(let d of data){
            this.totalSales=this.totalSales+d.price;
            if(d.price<1000000){
                d.price=1000000;
            }
          
     if(d.status==='1'){
        this.salesNumberApi[0]=d.price;
     }
     if(d.status==='2'){
        this.salesNumberApi[1]=d.price;
     }
     if(d.status==='3'){
        this.salesNumberApi[2]=d.price;
     }
     if(d.status==='4'){
        this.salesNumberApi[3]=d.price;
     }
     if(d.status==='5'){
        this.salesNumberApi[4]=d.price;
     }
     if(d.status==='6'){
        this.salesNumberApi[5]=d.price;
     }
     if(d.status==='7'){
        this.salesNumberApi[6]=d.price;
     }
     if(d.status==='8'){
        this.salesNumberApi[7]=d.price;
     }
     if(d.status==='9'){
        this.salesNumberApi[8]=d.price;
     }
     if(d.status==='10'){
        this.salesNumberApi[9]=d.price;
     }
     if(d.status==='11'){
        this.salesNumberApi[10]=d.price;
     }
     if(d.status==='12'){
        this.salesNumberApi[11]=d.price;
     }
     if(d.status==='13'){
        this.salesNumberApi[12]=d.price;
     }
     if(d.status==='14'){
        this.salesNumberApi[13]=d.price;
     }
     if(d.status==='15'){
        this.salesNumberApi[14]=d.price;
     }
     if(d.status==='16'){
        this.salesNumberApi[15]=d.price;
     }
     if(d.status==='17'){
        this.salesNumberApi[16]=d.price;
     }
     if(d.status==='18'){
        this.salesNumberApi[17]=d.price;
     }
     if(d.status==='19'){
        this.salesNumberApi[18]=d.price;
     }
     if(d.status==='20'){
        this.salesNumberApi[19]=d.price;
     }
     if(d.status==='21'){
        this.salesNumberApi[20]=d.price;
     }
     if(d.status==='22'){
        this.salesNumberApi[21]=d.price;
     }
     if(d.status==='23'){
        this.salesNumberApi[22]=d.price;
     }
     if(d.status==='24'){
        this.salesNumberApi[23]=d.price;
     }
     if(d.status==='25'){
        this.salesNumberApi[24]=d.price;
     }
     if(d.status==='26'){
        this.salesNumberApi[25]=d.price;
     }
        }
    },
    error:(error)=>{
        console.log(error);
    }
})
const documentStyle = getComputedStyle(document.documentElement);
const textColor = documentStyle.getPropertyValue('--text-color');
const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

this.basicData1 = {
    labels: this.salesStatsApi,
    datasets: [
        {
            label: 'Sales 1Lakh may mean sales<1000000',
            data: this.salesNumberApi,
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)',],
            borderWidth: 1
        }
    ]
};

this.basicOptions1 = {
    plugins: {
        legend: {
            labels: {
                color: textColor
            }
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        },
        x: {
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        }
    }
};

}
}
