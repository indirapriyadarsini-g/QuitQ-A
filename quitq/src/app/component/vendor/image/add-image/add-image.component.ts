import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ImageServiceService } from '../../../service/image-service.service';
import { ProductServiceService } from '../../../service/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { File } from 'node:buffer';

@Component({
  selector: 'app-add-image',
  standalone: true,
  imports: [NavbarComponent,FormsModule,NgIf,NgFor],
  templateUrl: './add-image.component.html',
  styleUrl: './add-image.component.css'
})
export class AddImageComponent implements OnInit {
file:File;
cover:boolean=false;
product:string="";
errorMssg:string=undefined;
successMssg:string=undefined;
products:any[]=[]
pageNumber:number=0;
size:number=1000;
selected:any;
id:number=0;
imgPath:string=""
constructor(private imageService:ImageServiceService,private productService:ProductServiceService,private activateRoute:ActivatedRoute){
  this.productService.getAllProduct(this.pageNumber,this.size).subscribe({
    next:(data)=>{
      this.products=data.content;
      console.log(this.products)
    }
  })
}

resetmsg(){
console.log("cover="+this.file)
}
onClick(){
 this.products=this.products.filter(p=>
  p.title===this.product
 )
let formData = new FormData();
formData.set('image',this.file);
this.imageService.addImage(
  formData,this.products[0].id,this.cover).subscribe({
  next:(data)=>{
    this.successMssg="Image uploaded successfully"
    this.errorMssg=undefined;
    console.log(data);
  },
  error:(error)=>{
    console.log(error)
    this.errorMssg="Something went wrong"
    this.successMssg=undefined
  }
})
console.log(this.file)



}
productDetail(){


this.products.filter(p=>{

  if(p.title===this.product){
    this.id=p.id;
    
  }
});
console.log(this.id)

}
ngOnInit(): void {
    this.product=this.activateRoute.snapshot.paramMap.get('product')
}
onChange(event:any){
  console.log("Image Path="+this.imgPath)
  this.file=event.target.files[0];
  console.log("File="+this.file.name)
this.imgPath="images/"+this.file.name
console.log(this.imgPath)
}

}
