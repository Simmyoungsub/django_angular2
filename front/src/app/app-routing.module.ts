import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HttpTestComponent } from './http-test/http-test.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'http-test', component:HttpTestComponent},
]

@NgModule({

  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})

export class AppRoutingModule{}
