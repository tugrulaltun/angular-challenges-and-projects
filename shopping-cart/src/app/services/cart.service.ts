import {Injectable} from '@angular/core';
import {CartItem} from '../models/cart-item.model';
import {Product} from '../models/product.model';
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class CartService {
  private items: CartItem[] = [];
  private cartUpdated = new BehaviorSubject<CartItem[]>([]);

  addToCart(product: Product): void {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({product, quantity: 1});
    }
    this.cartUpdated.next(this.getCartItems());
  }

  removeFromCart(productId: number): void {
    const existingItem = this.items.find(item => item.product.id === productId);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else if (existingItem) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
    this.cartUpdated.next(this.getCartItems());
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  getCartItems(): CartItem[] {
    return this.items;
  }

  getCartUpdatedListener() {
    return this.cartUpdated.asObservable();
  }
}
