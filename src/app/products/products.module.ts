import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';



@NgModule({
  declarations: [
    HomeComponent,
    Error404Component,
    DocumentationComponent
  ],
  exports:[
    HomeComponent,
    Error404Component,
    DocumentationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
