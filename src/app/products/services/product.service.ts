import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = 'http://sap.playerytees.com:8091/api/test/Items'

  constructor( private http: HttpClient ) { }

  getProducts(): Observable<any> {

    return this.http.get(this.apiUrl);

  }

}
