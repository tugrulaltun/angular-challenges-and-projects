import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distanceConverter',
  pure: true
})
export class DistanceConverterPipe implements PipeTransform {

  transform(distance: number, unit: 'km' | 'miles'): number {
    return unit === 'km' ? distance * 1.60934 : distance / 1.60934;
  }

}
