import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public count:number=0;

  constructor(private share:SharedDataService,public router:Router,private loader:LoaderService){}
  loading$=this.loader.loading$



  ngOnInit(){
    this.watchCount()
  }

  watchCount(){
    this.share.count.subscribe(count =>this.count = count)
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }

  ngOnDestroy(){
    
    this.share.count.unsubscribe();
  }
}
