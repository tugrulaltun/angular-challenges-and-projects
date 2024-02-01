import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  fetchData(type: string): Observable<any> {
    if (!['posts', 'comments', 'albums', 'photos', 'todos', 'users'].includes(type)) {
      return throwError(() => new Error('Invalid request type'));
    }
    return this.http.get(`${this.API_URL}/${type}`).pipe(
      catchError(error => {
        // Log and rethrow error to handle it in the component
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
