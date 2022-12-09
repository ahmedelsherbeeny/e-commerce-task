import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url="https://dummyjson.com"


  // we use behavioursubject to share data between search component and product component
  public searchedProducts$ = new BehaviorSubject<[]>([]);


  constructor(private http:HttpClient) { }

  getProds(){
    return this.http.get(this.url+'/products')
  }
  getProductsBySearch(value:any){
    return this.http.get(this.url+'/products/search?q='+value);

  }
 
}
