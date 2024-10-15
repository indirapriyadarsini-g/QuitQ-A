import { Injectable } from '@angular/core';

import { CustomerService } from './customer.service';
import { SearchDto } from '../search-dto/search-dto.module';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  

  constructor(private router: Router,
    private customerService: CustomerService
  ) { }

  private selectedSearch = new BehaviorSubject<SearchDto>(null);
  selectedSearch$ = this.selectedSearch.asObservable();


  searchIsSet = false;

  setProdSearch(val:boolean){
    this.searchIsSet = val;
  }

  setSearch(dto:SearchDto){
    this.searchIsSet = true;
    this.selectedSearch.next(dto);
  }

  search(dto: SearchDto) {
    this.customerService.search(dto).subscribe({
      next: (data) => {
        this.customerService.setProductList(data);
        this.router.navigateByUrl("/customer/search");
      }
    })
  }
}
