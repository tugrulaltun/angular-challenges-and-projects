import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterArray',
  pure: true
})
export class FilterArrayPipe implements PipeTransform {

  transform(items: any[], criteria: string): any[] {
    return items.filter(item => item.includes(criteria));
  }

}
