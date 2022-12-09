import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'components',loadChildren:()=>import('./lazy-loaded-components/lazy-loaded-components.module').then(mod=>
  //   mod.LazyLoadedComponentsModule)},
    // {
    //   path:'',
    //   redirectTo:'auth',
    //   pathMatch:'full'
    // },
    // {
    //   path:'',
    //   loadChildren:()=>import('../app/layout/layout.module').then(mod=>mod.LayoutModule),
    // },
    // {
    //   path:'features',
    //   loadChildren:()=>import('../app/layout/layout.module').then(mod=>mod.LayoutModule),
    // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
