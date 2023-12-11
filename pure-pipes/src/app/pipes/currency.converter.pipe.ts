import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currencyConverter',
  pure: true
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(amount: number, rate: number): number {
    return amount * rate;
  }

}
