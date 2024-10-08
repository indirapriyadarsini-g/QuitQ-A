import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router, RouterLink } from '@angular/router';
import { CustomerService } from '../../../service/customer.service';
import { Product } from '../../../model/product/product.module';
import { NgFor } from '@angular/common';
import { ProductViewComponent } from "../product/product-view/product-view.component";
import { SearchService } from '../../../service/search.service';
import { SearchDto } from '../../../search-dto/search-dto.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, NgFor, ProductViewComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  constructor(private router:Router,
    private searchService : SearchService, 
    private customerService : CustomerService){  }

    dto:SearchDto = new SearchDto();
  
  onCategoryClick(cat: string) {

    console.log("inside cat click");
    this.customerService.setCategory(cat);
    // window.location.reload();

    // this.dto.category = cat;
    // console.log("inside cat click");
    // this.searchService.search(this.dto);
  // this.router.navigateByUrl("/search/?param="+cat)
  // this.router.navigate(['/search'], { queryParams: { category: cat } });

}

}
