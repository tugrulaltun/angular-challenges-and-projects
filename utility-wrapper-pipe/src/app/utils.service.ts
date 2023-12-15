import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  add(a: number, b: number): number {
    return a + b;
  }

  concat(str1: string, str2: string): string {
    return str1 + str2;
  }
}
