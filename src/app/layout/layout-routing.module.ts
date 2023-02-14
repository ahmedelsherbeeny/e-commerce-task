import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [
  {
        path:'',
        loadChildren:()=>import('../authentication/authentication.module').then(mod=>mod.AuthenticationModule),
        canActivate:[LoginGuard]
  },
  {
    path:'',
    loadChildren:()=>import('../features/features.module').then(mod=>mod.FeaturesModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
