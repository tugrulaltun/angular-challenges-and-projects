import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  pure: true
})
export class SortByPipe implements PipeTransform {

  transform(array: any[], field: string): any[] {
    return array.sort((a, b) => (a[field] > b[field] ? 1 : -1));
  }

}
