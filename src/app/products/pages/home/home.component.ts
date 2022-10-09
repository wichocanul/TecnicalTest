import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private productService: ProductService) { this.showProducts() }

  showProducts(){
    this.productService.getProducts()
      .subscribe( resp => {
        console.log(resp.data);
      })
  }

}
