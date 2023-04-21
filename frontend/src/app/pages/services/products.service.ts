import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/products.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<Product[]>(this.apiUrl + '/api/products');
  }
}
