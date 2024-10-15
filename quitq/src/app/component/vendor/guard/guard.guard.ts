import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';

@Injectable({
  providedIn: 'root'
})
export  class AuthGuard  implements CanActivate  {
  
  constructor(private router: Router, private userService:UserServiceService){}
  canActivate(): boolean{
    /** when shd i say -- true : true means, I allow the access
     *  1. I have token in local storage , which means user has loggedIn now or anytime in the past 
     *  2. This token is still valid and not-expired 
     * **/ 
    
     let status =  this.userService.isUserAutheticated();
     console.log(status)
     if(status == false){
      this.router.navigateByUrl("logout");
      //this.router.navigate([LoginComponent]) -- alternative
    } 
    return status; 
     /** 
     * when shd i say -- false : false means, I block the access 
     * 1. If i do not find token in local storage, i say false 
     * 2. If API does not give me 200 after giving the token then 
     * i would make the user login and get new token generated 
     * as, it could be a big possibility that the token must have expired
     * **/
     //return false; 
  }
   
}
