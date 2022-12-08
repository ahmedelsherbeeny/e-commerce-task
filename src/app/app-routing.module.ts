import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'components',loadChildren:()=>import('./lazy-loaded-components/lazy-loaded-components.module').then(mod=>
    mod.LazyLoadedComponentsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
