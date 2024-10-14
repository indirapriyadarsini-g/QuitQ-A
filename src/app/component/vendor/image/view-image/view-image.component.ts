import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { ProductServiceService } from '../../../service/product-service.service';
import { FormsModule } from '@angular/forms';
import { ImageServiceService } from '../../../service/image-service.service';
import { Router } from '@angular/router';
import { File } from 'buffer';

@Component({
  selector: 'app-view-image',
  standalone: true,
  imports: [NavbarComponent,NgIf,NgFor,FormsModule],
  templateUrl: './view-image.component.html',
  styleUrl: './view-image.component.css'
})
export class ViewImageComponent {
  products:any[]=[]
  id:number=0;
  pageNumber:number=0;
  size:number=1000;
  product:string="";
  images:any[]=[]
  cover:boolean;
  image:any;
  file:any="No Image"
  img:string;
  successMssg:string=undefined;
  errorMssg=undefined;
  
  constructor(private productService:ProductServiceService,private imageService:ImageServiceService,private route:Router){
    this.productService.getAllProduct(this.pageNumber,this.size).subscribe({
      next:(data)=>{
        this.products=data.content;
        console.log(this.products)
      }
    })
  }
  productDetail(){
    console.log(this.product)
    this.products.filter(p=>{
      if(p.title===this.product){
        this.id=p.id;
      }    })
this.imageService.viewImage(this.id).subscribe({
  next:(data)=>{
    this.images=data;
    for(let img of this.images){
img.imageName="images/"+img.imageName;
    }
    console.log(this.images)
  },
  error:(error)=>{
    console.log(error)
  }
})

  }
resetmsg(){}
onClick(){
  this.route.navigate(['vendor/image-add',this.product]);
}
onSelect(id:any){
  this.imageService.viewParticularImage(id).subscribe({
    next:(data)=>{
      this.image=data;
      this.img="images/"+data.imageName;
      this.id=id;
      this.file=this.image.imageName;
      if(this.image.status==='uncover'){
        this.cover=false;
      }
      else{
        this.cover=true;
      }
      console.log(data)
    },
    error:(error)=>{
      console.log(error);
    }
  })
}
onUpdate(){
  
this.imageService.upDateImage(this.id).subscribe({
  next:(data)=>{
    this.image=data;
    this.file=this.image.imageName;
  },
  error:(error)=>{
    console.log(error);
    if(error.status===200){
      this.successMssg="Image Updated Successfully";
      this.errorMssg=undefined;
      this.cover=true;

    }
    else{
      this.errorMssg="Something went wrong";
      this.successMssg=undefined;
    }
  }
})
}
onDelete(){
this.imageService.deleteImage(this.id).subscribe({
  next:(data)=>{
    console.log("Data");
  },
  error:(error)=>{
    if(error.status==200){
      this.errorMssg=undefined;
this.successMssg="Image Deleted Successfully";
this.file=undefined;
this.cover=undefined;
this.img=undefined;
this.productDetail();
    }
    else{
      this.successMssg=undefined;
      this.errorMssg="Something went wrong"
    }
  }
})
}
deleteAll(){
  console.log(this.images[0].p.id)
this.imageService.deleteAllImage(this.images[0].p.id).subscribe({
  next:(data)=>{
    
  },
  error:(error)=>{
    if(error.status===200){
      this.errorMssg=undefined;
    this.successMssg="  All Image Deleted Successfully";
    this.file=undefined;
    this.cover=undefined;
    this.img=undefined;
    this.images=undefined;
    }
    else{
       this.successMssg=undefined;
      this.errorMssg="Something went wrong"
    }
  }
})
}
}
