import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API: string = 'https://60f8e4f7ee56ef0017975b44.mockapi.io/product';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.API, product)
  }

  removeProduct(id :number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }

  getDetail(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.API}/${id}`)
  }

  // updateProduct(id: number): Observable<Product>{
  //   return this.http.put<Product>(`${this.API}/${id}`)
  // }
}
