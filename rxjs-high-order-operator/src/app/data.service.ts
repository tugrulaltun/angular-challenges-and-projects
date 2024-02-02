import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  deleteObject(topic: string): Observable<boolean> {
    const isSuccess = Math.random() > 0.5;
    return of(isSuccess).pipe(delay(1000));
  }
}
