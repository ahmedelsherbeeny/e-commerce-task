import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private userService:UserService){}
// this canactivate prevents users from changing url path to see products without being authenticated
  canActivate() {
    const token=JSON.parse(localStorage.getItem("token")!)
      
    if(this.userService.checkToken()){


      return true;

    }
    else{

      this.router.navigate(['/'])

      return false
    }

  }
  
}
