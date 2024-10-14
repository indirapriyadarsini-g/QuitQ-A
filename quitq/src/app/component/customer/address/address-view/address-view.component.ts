import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-view',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './address-view.component.html',
  styleUrl: './address-view.component.css'
})
export class AddressViewComponent {

  address:any;

  onSubmit() {
    
  } 



}
