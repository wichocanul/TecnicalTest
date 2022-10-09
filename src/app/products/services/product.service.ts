import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Interfaces
import { RestProductsResponse } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = 'http://sap.playerytees.com:8091/api/test/Items'

  constructor( private http: HttpClient ) { }

  getProducts(): Observable<RestProductsResponse> {

    return this.http.get<RestProductsResponse>(this.apiUrl);

  }

}
