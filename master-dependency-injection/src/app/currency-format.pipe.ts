import {Pipe, PipeTransform} from '@angular/core';
import {CurrencyService} from "./currency.service";

@Pipe({
  name: 'currencyFormat',
  standalone: true,
})
export class CurrencyFormatPipe implements PipeTransform {
  constructor(private currencyService: CurrencyService) {
  }

  transform(amount: number, currency: string): string {
    return this.currencyService.formatCurrency(amount, currency);
  }
}
