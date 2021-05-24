import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: "full"
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'About', component: AboutComponent
  },
  {
    path:'Login', component:LoginComponent
  },
  {
    path:'userModule', loadChildren: () => import('./user/user.module').then(m=> UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
