import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL="https://dummyjson.com";

  constructor(private http:HttpClient) { }


  logIn(data:any){
    return this.http.post(this.URL+"/auth/login",data);
  }
}


