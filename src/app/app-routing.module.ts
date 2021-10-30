import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessLoginComponent } from './login/success-login/success-login.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./login/login.module').then(m=>{m.LoginModule})},
  {path:'success',component:SuccessLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
