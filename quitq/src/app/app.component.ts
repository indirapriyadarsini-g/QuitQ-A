import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./component/customer/navbar/navbar.component";
import { HomeComponent } from "./component/customer/home/home.component";
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from './component/auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quitq';
}
