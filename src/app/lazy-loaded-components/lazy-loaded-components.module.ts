import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadedComponentsRoutingModule } from './lazy-loaded-components-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LazyLoadedComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LazyLoadedComponentsModule { }
