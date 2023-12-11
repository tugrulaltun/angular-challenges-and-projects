import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValue',
  pure: true
})
export class KeyValuePipe implements PipeTransform {

  transform(object: any): any[] {
    return Object.keys(object).map(key => ({ key, value: object[key] }));
  }

}
