import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../../../service/product-service.service';
import { NgFor, NgIf } from '@angular/common';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../../../model/product.model';
import { ImageServiceService } from '../../../../service/image-service.service';

@Component({
  selector: 'app-vendor-product-list',
  standalone: true,
  imports: [NavbarComponent,NgFor,NgIf,FormsModule],
  templateUrl: './vendor-product-list.component.html',
  styleUrl: './vendor-product-list.component.css'
})
export class VendorProductListComponent implements OnInit {
  products:any[]=[];
  token:string=localStorage.getItem('token');
  totalPage:number=0;
  pageSize:number=3;
  pageNumber:number=0;
  counter:number=0;
  page:number[]=[];
  first:boolean=false;
  last:boolean=false;
  status:string="inactive"
  status1:string="active"
  id:number;
c:any;
category:any[]=[];
  isArchive:boolean=false;
  hardDeletemsg=undefined;
images:any[]=[];
constructor(private productService:ProductServiceService,private router:Router,private imageService:ImageServiceService)
{
  console.log(this.token);
  this.getCategorySold();

  
}
fetchData(){
  this.productService.getAllProduct(this.pageNumber,this.pageSize).subscribe({
    next:(data)=>{
      this.hardDeletemsg=undefined;

      this.products=data.content;
      this.totalPage=data.totalPages;
      this.first=data.first;
      this.last=data.last;
      console.log(this.totalPage)
      if(this.counter==0){
        let i=0;
        while(i<this.totalPage){
this.page.push(i);
i++;
        };
      }
      this.counter=this.counter+1;
      this.getImageProduct();
      
    },
    error:(error)=>{
      console.log(error)
    }
  })
}
getImageProduct(){
  for(let p of this.products){
    this.imageService.getOneImageOfProduct(p.id).subscribe({
      next:(data)=>{
        if(data.length!=0)
        p.imageName="images/"+data[0].imageName;
      if(data.length===0)
      {
        p.imageName="https://images-cdn.ubuy.co.in/64d849a391df522441229ece-lenovo-flex-5-14-fhd-touchscreen.jpg"
      }
        console.log(p)
      },
      error:(error)=>{
      console.log(error)
      }
    })
    

  }
  console.log(this.products);
}
onPrev(){
  this.pageNumber=this.pageNumber-1;
  this.fetchData();
}
onNext(){
  this.pageNumber=this.pageNumber+1;
  this.fetchData();
}
onPageClick(n:number){
  this.pageNumber=n;
  this.fetchData();

}
AllProduct()
{

  this.fetchData()
}
OrderedProduct()
{
  this.hardDeletemsg=undefined;

  this.productService.viewOrderedProduct(this.pageNumber,this.pageSize).subscribe({
    next:(data)=>{
     this.products=data.content;
     this.totalPage=data.totalPages;

     this.first=true;
     this.last=true;
     this.page=[]
     console.log(data)
     if(this.counter==0){
      let i=0;
      while(i<this.totalPage){
        this.page.push(i);
        i++;
      };
      this.counter=this.counter+1;
      this.getImageProduct();

     }
    },
    error:(error)=>{
      console.log(error)
    }
  })
}
unOrderedProduct(){
  this.hardDeletemsg=undefined;

  this.productService.viewUnOrderedProduct().subscribe({
    next:(data)=>{
     this.products=data;
     this.first=true;
     this.last=true;
     this.totalPage=0;
     this.page=[]
     this.getImageProduct();

    },
    error:(error)=>{
      console.log(error)
    }
  })
}
outOfStock(){
  this.hardDeletemsg=undefined;

  this.productService.getOutOfStockProduct().subscribe({
    next:(data)=>{
      this.products=data;
      this.first=true;
      this.last=true;
      this.totalPage=0;
      this.page=[]
      this.getImageProduct();

    },
    error:(error)=>{
      console.log(error)
    }
  })
}
archiveProduct(){
  this.hardDeletemsg=undefined;

  this.isArchive=true;
  this.productService.getProductArchived(this.status).subscribe({
    next:(data)=>{
      this.products=data;
      this.first=true;
      this.last=true;
      this.totalPage=0;
      this.page=[]
      this.getImageProduct();

    },
    error:(error)=>{
      console.log(error)
    }
  })
}
view(p:any){
  this.hardDeletemsg=undefined;

  this.id=p.id;

  this.router.navigate(['vendor/product-view',p.id])
}
edit(p:Product){
  this.hardDeletemsg=undefined;

  this.productService.setProductInfo(p);

this.router.navigate(["vendor/product-update",p.id])
}
ngOnInit(): void {
    this.productService.productInfo$.subscribe(p=>{
      console.log(p.title);
      console.log(p.price)
    })
}
unarchive(p:any){
  this.hardDeletemsg=undefined;

this.productService.makeProductActive(p.id).subscribe({
  next:(data)=>{
    console.log(data);
console.log("Hello")
this.fetchData()
  },
  error:(error)=>{
    console.log(error)
    if(error.status===200){
      p.status="active"

    }

  }
})
}
archive(p:any){
  this.hardDeletemsg=undefined;

  this.productService.makeProductInActive(p.id).subscribe({
    next:(data)=>{
      console.log(data);
  this.fetchData();
    },
    error:(error)=>{
      console.log(error)
      if(error.status==200)
      {
        p.status="inactive"

      }

    }
  })
}
review(p:any){
  
  this.router.navigate(["vendor/product-review",p.id])
}
inStock(){
  this.hardDeletemsg=undefined;

  this.productService.getInStockProduct().subscribe({
    next:(data)=>{
      this.products=data;
      this.first=true;
      this.last=true;
      this.totalPage=0;
      this.page=[]
      this.getImageProduct();


    },
    error:(error)=>{
      console.log(error)
    }
  })
}
getCategorySold(){
  this.hardDeletemsg=undefined;

  this.productService.getAllCategory(localStorage.getItem('token')).subscribe({
    next:(data)=>{
      this.category=data;
      console.log(this.category)

    },
    error:(error)=>{
      console.log(error)
    }
  })
}
onChange(c:any){
  this.hardDeletemsg=undefined;

  console.log(c);
  this.productService.getProductByCategoryName(c).subscribe({
    next:(data)=>{
      this.products=data;
    },
    error:(error)=>{
console.log(error)
this.products=[]
    }
  })
}
hardDelete(p:any){
  this.hardDeletemsg=undefined;

this.productService.makeHardDelete(p.id).subscribe({
  next:(data)=>{
    this.hardDeletemsg="Product Deleted Permanently";
    this.products=this.products.filter(pr=>
    
      pr.id!==p.id
       
    
    )
  },
  error:(data)=>{
    this.hardDeletemsg="Error occured";
  }
  
})
}
filter(){
  
  
  console.log(this.products);
}

}
