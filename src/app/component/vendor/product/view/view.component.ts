import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../../../service/product-service.service';
import { ImageServiceService } from '../../../service/image-service.service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgIf],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  
  images:any[]=[];
  image:string=""
  current:number=0;
  first:boolean=true;
  last:boolean=false;
  id:string;

  product:any;
  constructor(private actRoute:ActivatedRoute,private productService:ProductServiceService,private route:Router,private imageService:ImageServiceService){
    this.images.push('https://in-files.apjonlinecdn.com/landingpages/content-pages/visid-rich-content/hp-laptop-15s/images/desktop_laptop.png');
    this.images.push('https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg');
    this.images.push('https://cdn.thewirecutter.com/wp-content/media/2023/11/editing-laptop-2048px-231551-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp')
    console.log(this.images[0])
  }
prev(){
  console.log(this.current);
  if(this.current===0){
    this.first=true;
  }
  else{
    this.current=this.current-1;

  }
 
}
next(){
  if(this.current===this.images.length-1){
    this.last=true;
  }
  else{
    this.current=this.current+1

  }
}
ngOnInit(): void {
   this.id= this.actRoute.snapshot.paramMap.get('id');
console.log(this.product)  
this.productService.getProductId(Number(this.id)).subscribe({
  next:(data)=>{
    this.product=data;
    console.log(this.product)
  },
  error:(error)=>{
    console.log(error)
  }
}) 
this.imageService.viewImage(Number(this.id)).subscribe({
  next:(data)=>{
    this.images=data
    console.log(this.images);
    for(let img of this.images){
      img.imageName="images/"+img.imageName
    }
  },
  error:(error)=>{
    console.log(error)
  }
})

}
onClick(){
  this.route.navigateByUrl("vendor/product-list");
}
}
