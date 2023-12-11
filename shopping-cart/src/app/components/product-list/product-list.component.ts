import {Component, EventEmitter, Output} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  products: Product[];

  @Output() addToCartEvent = new EventEmitter<Product>();

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.addToCartEvent.emit(product);
  }
}
