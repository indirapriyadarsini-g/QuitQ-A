import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  email: string='admin@quitq.com'; 
  constructor(private router: Router){
    localStorage.clear();
  }

  login(){
    this.router.navigateByUrl('/auth/login'); 
    // this.router.navigate([LoginComponent]);
  }
}


