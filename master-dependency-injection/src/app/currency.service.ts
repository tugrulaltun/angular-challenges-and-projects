import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor() {
  }

  formatCurrency(amount: number, currency: string): string {
    return `${currency} ${amount.toFixed(2)}`;
  }
}
