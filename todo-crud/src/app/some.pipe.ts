import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'some'
})
export class SomePipe implements PipeTransform {
  transform<T>(items: T[], predicate: (item: T) => boolean): boolean {
    return items.some(predicate);
  }
}
