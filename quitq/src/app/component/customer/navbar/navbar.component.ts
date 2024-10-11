import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../auth/login/login.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { FormsModule } from '@angular/forms';
import { SearchDto } from '../../../search-dto/search-dto.module';
import { SearchService } from '../../../service/search.service';
import { CustomerService } from '../../../service/customer.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf,RouterModule,RouterLink,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor(private router : Router, 
    private searchService : SearchService,
    private customerService: CustomerService,
    private userService: UserService) {
    this.loggedIn = userService.isUserAutheticated();
 }
  ngOnInit(): void {
    this.customerService.setProfile({
      "user":{
        "username":localStorage.getItem('username')
      }
    })
  }
  dto:SearchDto;

onClickCategory(cat: string) {
  // this.router.navigate(['/search'], { queryParams: {category: cat } });
  this.dto.category = cat;
  this.searchService.search(this.dto);
}

  loggedIn:boolean;
  
  username:string = localStorage.getItem('username');
  searchTerm = '';



signup() {
throw new Error('Method not implemented.');
}
logout() {
  
  this.loggedIn = false;
  this.customerService.setAddress(null);
  this.customerService.setCart(null);
  this.customerService.setCategory(null);
  this.customerService.setProductSelected(null);
  this.customerService.setProfile(null);
  this.router.navigateByUrl("/auth/logout")
}

login() {
  
  this.loggedIn = true;
  this.router.navigateByUrl("/auth/login")
  // this.router.navigate([LoginComponent]);
}

onSearch(searchTerm:string) {
  // if (searchTerm) {
  //   this.router.navigate(['/customer/search'], { queryParams: { keyword: this.searchTerm } });
  // }
  
}
}
