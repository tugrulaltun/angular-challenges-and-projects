import {Pipe, PipeTransform} from '@angular/core';
import {UtilsService} from "./utils.service";

@Pipe({
  name: 'utilsPipe',
  standalone: true,
  pure: true
})
export class UtilsPipe implements PipeTransform {

  constructor(private utilsService: UtilsService) {
  }

  transform(functionName: 'add', a: number, b: number): number;
  transform(functionName: 'concat', str1: string, str2: string): string;

  transform(functionName: string, ...args: any[]): any {
    switch (functionName) {
      case 'add':
        return this.utilsService.add(args[0], args[1]);
      case 'concat':
        return this.utilsService.concat(args[0], args[1]);
      default:
        throw new Error(`Function '${functionName}' not found in UtilsService`);
    }
  }
}
