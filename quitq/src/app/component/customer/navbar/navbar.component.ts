import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
login() {
throw new Error('Method not implemented.');
}
logout() {
throw new Error('Method not implemented.');
}

  loggedIn:boolean = false;
  loggedOut:boolean = true;

}
