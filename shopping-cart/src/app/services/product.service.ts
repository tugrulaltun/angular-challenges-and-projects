import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({providedIn: 'root'})
export class ProductService {
  private products: Product[] = [
    {id: 1, name: 'Product 1', price: 100},
    {id: 2, name: 'Product 2', price: 200}
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
