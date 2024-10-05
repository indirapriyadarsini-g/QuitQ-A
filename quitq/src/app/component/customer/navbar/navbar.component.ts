import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../../auth/login/login.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../../../service/user.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf,RouterModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  loggedIn:boolean;
  constructor(private router : Router, private userService: UserService) {
     this.loggedIn = userService.isUserAutheticated();
  }
  
  searchTerm = '';

signup() {
throw new Error('Method not implemented.');
}
logout() {
  
  this.loggedIn = false;
  this.router.navigateByUrl("/auth/logout")
}

login() {
  
  this.loggedIn = true;
  this.router.navigateByUrl("/auth/login")
  // this.router.navigate([LoginComponent]);
}

search() {
  if (this.searchTerm) {
    this.router.navigate(['/customer/search'], { queryParams: { keyword: this.searchTerm } });
  }

  
  
}
}
