import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';    
import { ProductComponent } from './product/product.component';
// import {HttpClient} from '@angular/common/http'
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { StudentregformComponent } from './studentregform/studentregform.component';

const routes: Routes = [{path:"",component:StudentdashboardComponent},
{path:"reg",component:StudentregformComponent},
{path:"pro",component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


