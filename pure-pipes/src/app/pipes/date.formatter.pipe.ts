import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateFormatterPipe',
  pure: true
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: string): string {
    return new Date(value).toLocaleDateString('en-US');
  }

}
