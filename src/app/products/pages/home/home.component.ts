import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  existError: boolean = false;

  constructor( private productService: ProductService) { this.showProducts() }

  showProducts(){
    
    this.existError = false;

    this.productService.getProducts()
      .subscribe( (resp) => {
        console.log(resp.data);
      }, (err) => {
        this.existError = true;
      });
  }

}
