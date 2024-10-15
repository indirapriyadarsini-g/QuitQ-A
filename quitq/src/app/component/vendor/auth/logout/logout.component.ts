import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
email:string="quitq@gmail.com";
constructor(private route:Router){
localStorage.clear();
}
login(){
  this.route.navigateByUrl("/")
}
}
