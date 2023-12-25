import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Book {
  id: number;
  title: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://your-api-url.com/books';

  constructor(private http: HttpClient) {
  }

  search(query: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/search`, {params: {q: query}});
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }
}
