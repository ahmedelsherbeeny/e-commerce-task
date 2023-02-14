import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL="https://dummyjson.com";

  constructor(private http:HttpClient) { }


  logIn(data:any){
    return this.http.post(this.URL+"/auth/login",data);
  }
  
  checkToken(){
    const token=JSON.parse(localStorage.getItem("token")!)
    if(token){
      return true;
    }else{
      return false;
    }


  }

 
}
