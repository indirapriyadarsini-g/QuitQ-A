import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private apiUrl = 'https://localhost:8083/customer/search';

  constructor(private http: HttpClient) {}

  searchProducts(keywords: string): Observable<any> {
    const url = `${this.apiUrl}/?param=${keywords}`;
    return this.http.get<any>(url);
  }
}
