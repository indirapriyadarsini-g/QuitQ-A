import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
username:string=localStorage.getItem('username');
constructor(private route:Router){

}
OnLogout(){
  this.route.navigateByUrl("/logout")
}
}
