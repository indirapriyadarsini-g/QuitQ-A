import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-warehouse-detail',
  standalone: true,
  imports: [NavbarComponent,NgIf,NgFor,FormsModule],
  templateUrl: './warehouse-detail.component.html',
  styleUrl: './warehouse-detail.component.css'
})
export class WarehouseDetailComponent {
name:string='QuitQ Warehouse'
city:string='Indore';
contact:number=7000124;
manager:string="Mr. Albus DumbleDore"
managerContact:number=1234567


}
