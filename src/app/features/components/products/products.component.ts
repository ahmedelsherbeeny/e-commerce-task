import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { staggering, fade } from 'src/app/helpers/animations';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations:[
    staggering,fade

  ]
})
export class ProductsComponent implements OnInit,OnDestroy{
  products: any
  productsForFilter: any = []
  tempArray: any = []
  tempArrytwo: any = []
  math = Math;
  allCategories: any = []
  categories: any
  categoryNums: any = []
  p: number = 1
  searchedProducts: any = []
  searched: boolean = false
  numOfSerchedFound: number = 0;
  addToCartText:string='Add to cart'
  productsInCart:any=[]
  filterCategories:any[]=[]
  filterValue:string='';
  unsubscribe$:Subject<boolean>=new Subject();

  constructor(private productService: ProductsService, private share: SharedDataService,private router:Router) {

  }
  ngOnInit(): void {
    // getting all products and pushing them in products array
    this.getAllProducts(true);
    this.getSearchedValues()
   
  }




  filter(event: any) {
    if (event.target.checked) {
      this.filterValue=event.target.value
      
      


      // pushing products with the same category as event.target.value in the temparry
      this.tempArray = this.productsForFilter.filter((prod: any) => {
        return prod.category === event.target.value

      })

      // then we empty the productsarry
      this.products = []


      // so every time we hit the checkbox, we get new filtered products so we push these products in temparrytwo

      this.tempArrytwo.push(this.tempArray)
      // then we push every product of it in the productsarry
      this.tempArrytwo.forEach((prod: any) => {
        prod.forEach((innerele: any) => {
          this.products.push(innerele)
        })
      })
    }
    else {
      this.filterValue=''

      // in case we uncheck the checkbox we remove the unchecked products from temparray
      this.tempArray = this.products.filter((prod: any) => {
        return prod.category != event.target.value
      })
      // then we empty productsarray and temptwo arry
      this.products = []
      this.tempArrytwo = []

      // then we push the new filtered products to the temptwoarray

      this.tempArrytwo.push(this.tempArray)
      // then we push every product of temptwoarry in products arry
      this.tempArrytwo.forEach((prod: any) => {
        prod.forEach((innerele: any) => {
          this.products.push(innerele)
        })
      })
      if (this.products.length == 0) {
        // if we unchecked all check boxes then we get all products again
        this.getAllProducts(false);
      }
    }

  }


  getAllProducts(loadCategory:boolean) {
    this.productService.getProds().pipe(takeUntil(this.unsubscribe$))
    .subscribe((prods: any) => {
      this.products = prods.products;
      this.productsForFilter = this.products
      if(loadCategory){
        this.getAllCategories();
      }
    })

  }
  getAllCategories() {

    this.products.forEach((prod: any) => {
      //getting all categories and pushing them in all categories array
      this.allCategories.push(prod.category)

    });

    // removing duplicate elemnts from allcategories array
    this.categories = this.allCategories.filter((item: any, index: any) =>
      this.allCategories.indexOf(item) === index)

    // getting the number of occurence of each category 
    this.categories.forEach((cat: any) => {
      let count = 0;
      this.products.forEach((prod: any) => {
        if (prod.category == cat) {
          count++;

        }
      });
      // finally pushing each category with its number of occurence in categorynums arry 
      this.categoryNums.push({ category: cat, number: count })
      console.log(" this.categoryNums", this.categoryNums);
      

    });

  }

  getSearchedValues() {
    this.productService.searchedProducts$.pipe(takeUntil(this.unsubscribe$))
    .subscribe(products=>{
      if(products.length > 0) {
        this.products = products;
        this.numOfSerchedFound = products.length;
        this.searched = true;
      }else{
        this.searched = false;
        // here if search value is empty we get all products without loading categories again
        this.getAllProducts(false);
      }
      
    })

  }

  // getting number of added products to cart 
  IncreaseCount(id: number) {
    let prevCount = this.share.count.getValue();
    this.share.count.next(prevCount + 1);
    let product = this.products.find((p: any) => p.id === id);
    product.added = true;
    this.productsInCart.push(product.id)
    this.addToCartText="In your cart"
  }

// unsubscribing all subscriptions
  ngOnDestroy(){
     this.unsubscribe$.next(true); 
  }

}
