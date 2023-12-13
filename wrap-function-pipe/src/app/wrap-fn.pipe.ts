import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'wrapFn',
  standalone: true
})
export class WrapFnPipe implements PipeTransform {

  transform<T, R>(callback: (...args: T[]) => R, ...args: T[]): R {
    return callback(...args);
  }

}
