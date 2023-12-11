import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate',
  pure: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}
