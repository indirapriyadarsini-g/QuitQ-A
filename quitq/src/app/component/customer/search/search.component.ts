import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { subscribe } from 'diagnostics_channel';
import { CustomerService } from '../../../service/customer.service';


@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  imports:[NavbarComponent,NgIf,NgFor],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  category: string | null = null;
  products: any[] = [];
searchTerm: any;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const allParams = params.getAll('param'); // Capture all param values
      if (allParams.length > 0) {
        const keywords = allParams.join(','); // Convert array to comma-separated string
        this.performSearch(keywords);
      }
    });
  }
  

//   performSearch(keywords: string): void {
//     // Call the search service to fetch products from API
//     this.searchService.searchProducts(keywords).subscribe({
//       next: (response) => {
//         this.products = response; // Assuming the API returns an array of products
//       },
//       error: (error) => {
//         console.error('Error fetching search results:', error);
//       }
//     });
//   }
// }



performSearch(searchParams: any): void {
  // Construct query parameters based on what's available
  let queryParams = new HttpParams();

  if (searchParams.category) {
    queryParams = queryParams.set('category', searchParams.category);
  }
  
  if (searchParams.prodName) {
    queryParams = queryParams.set('prodName', searchParams.prodName);
  }


  // this.customerService.searchProducts(queryParams).subscribe({
  //   next: (data) => {
  //     this.products = data;
  //   },
  //   error: (err) => {
  //     console.error('Error fetching products', err);
  //   }
  // });
  
}
}