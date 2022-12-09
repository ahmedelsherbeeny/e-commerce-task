import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderInterceptor } from './loader/loader.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    NgxPaginationModule,
    BrowserAnimationsModule 




  ],
  providers: [ {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
