import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { DirectoryComponent } from './directory/directory.component';
import { StudentregformComponent } from './studentregform/studentregform.component';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {DataService} from './data.service';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { ProductComponent } from './product/product.component'

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    StudentregformComponent,
    StudentdashboardComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
