import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private share:SharedDataService,private router:Router,private userService:UserService){}

  canActivate() {
      
    if(this.share.token.getValue() !== '' && this.userService.isLoggedIn==true){

      return true;

    }
    else{

      this.router.navigate(['/'])

      return false
    }

  }
  
}
