import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from '../components/product-list/product-list.component';
import {CartComponent} from '../components/cart/cart.component';

@NgModule({
  declarations: [
    ProductListComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent,
    CartComponent
  ]
})
export class ShoppingModule {
}
