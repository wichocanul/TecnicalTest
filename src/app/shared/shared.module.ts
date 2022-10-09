//Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//My Components
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent
  ],
  exports:[
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
