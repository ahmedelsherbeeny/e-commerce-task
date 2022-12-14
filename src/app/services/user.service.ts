import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL="https://dummyjson.com";
  isLoggedIn:boolean=false;

  constructor(private http:HttpClient) { }


  logIn(data:any){
    return this.http.post(this.URL+"/auth/login",data);
  }
}
