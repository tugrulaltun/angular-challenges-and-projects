import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ShoppingModule} from "./shopping/shopping.module";
import {Product} from "./models/product.model";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ShoppingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shopping-cart';

  constructor(private cartService: CartService) {
  }

  handleAddToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
