import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class User{
  id: number; 
  username: string;
  password: string; 
  role: string; 
}