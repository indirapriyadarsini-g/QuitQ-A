import { Injectable } from '@angular/core';

import { CustomerService } from './customer.service';
import { SearchDto } from '../search-dto/search-dto.module';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  

  constructor(private router: Router,
    private customerService: CustomerService
  ) { }


  search(dto: SearchDto) {
    this.customerService.search(dto).subscribe({
      next: (data) => {
        this.customerService.setProductList(data);
        this.router.navigateByUrl("/customer/search");
      }
    })
  }
}
