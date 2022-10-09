import { Component } from '@angular/core';
import { Product, RestProductsResponse } from '../../interfaces/products.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  existError: boolean = false;
  products : Product[] = [];
  test: boolean = false;

  constructor( private productService: ProductService) { this.showProducts() }

  showProducts(){
    
    this.existError = false;

    this.productService.getProducts()
      .subscribe( (products) => {
        console.log(products.data);
        this.products = products.data;
      }, (err) => {
        this.existError = true;
        this.products = [];
      });
  }

}
