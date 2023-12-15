import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CurrencyService} from "../currency.service";
import {CurrencyFormatPipe} from "../currency-format.pipe";

interface Product {
  name: string;
  price: number;
  currency: string;
}

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyFormatPipe
  ],
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  providers: [CurrencyService]
})
export class ProductTableComponent {
  products: Product[] = [
    {name: 'Product 1', price: 100, currency: 'USD'},
    {name: 'Product 2', price: 85, currency: 'EUR'},
    {name: 'Product 3', price: 150, currency: 'USD'},
    {name: 'Product 4', price: 50, currency: 'EUR'},
    {name: 'Product 5', price: 75, currency: 'USD'},
    {name: 'Product 6', price: 120, currency: 'EUR'},
  ];
}
