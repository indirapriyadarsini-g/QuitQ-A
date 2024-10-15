import { CanActivate, Router } from '@angular/router';
import { UserService } from '../service/user.service';

// export const guardGuard: CanActivateFn = (route, state) => {
//   return true;
// };
export class AuthGuard  implements CanActivate {

  constructor(private router: Router, private userService: UserService){}

  canActivate(): boolean{

     let status =  this.userService.isUserAutheticated();
     if(status == false){
      this.router.navigateByUrl("**");
    } 
    return status; 
  }

}