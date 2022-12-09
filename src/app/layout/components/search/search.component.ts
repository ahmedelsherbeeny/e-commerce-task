import { Component } from '@angular/core';
import { ProductsService } from '../../../features/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private productService:ProductsService){

  }


  search(event:any){
    // we get the value from search input
    const val = (event.target as HTMLInputElement).value;
    val != "" ? this.getData(val) : this.productService.searchedProducts$.next([]);
}

getData(val:string){
  this.productService.getProductsBySearch(val).subscribe((data:any)=>{
    this.productService.searchedProducts$.next(data.products);
  })
}

}
