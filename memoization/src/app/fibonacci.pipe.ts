import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'fibonacci',
  standalone: true,
  pure: true
})
export class FibonacciPipe implements PipeTransform {
  transform(value: number): number {
    return this.fibonacci(value);
  }

  private fibonacci(n: number): number {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  }
}
