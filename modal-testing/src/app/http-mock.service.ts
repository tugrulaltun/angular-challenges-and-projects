import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpMockService {

  constructor() {}

  submitName(name: string): Observable<any> {
    // Mock HTTP request
    console.log(`Submitting name: ${name}`);
    return of({ success: true });
  }
}
