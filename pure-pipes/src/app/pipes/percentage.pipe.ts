import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'percentage',
  pure: true
})
export class PercentagePipe implements PipeTransform {

  transform(value: number): string {
    return `${value * 100}%`;
  }

}
