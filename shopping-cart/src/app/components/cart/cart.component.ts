import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartItem} from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  items: CartItem[];
  total: number;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) {
    this.items = this.cartService.getCartItems();
    this.total = this.cartService.getTotalPrice();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  ngOnInit() {
    this.cartService.getCartUpdatedListener().subscribe(items => {
      this.items = items;
      this.total = this.cartService.getTotalPrice();
    });
  }
}
