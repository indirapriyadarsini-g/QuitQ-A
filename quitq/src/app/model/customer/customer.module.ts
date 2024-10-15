import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Customer {
  id:number;
  name:string;
  contact:string;
  user:User
 }
