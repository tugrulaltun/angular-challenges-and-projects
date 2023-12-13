import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wrap-function-pipe';

  myFunction(arg1: number, arg2: number): number {
    return arg1 + arg2;
  }

  capitalizeString(input: string): string {
    return input.toUpperCase();
  };

  calculateDiscount(price: number, discountRate: number): number {
    return price * (1 - discountRate);
  }
}
