import { Observable } from 'rxjs';
import { Book } from './../../models/book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readonly baseUrl = 'https://localhost:7101/api/books';

  constructor(private http: HttpClient) { }

  getBook() : Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}`);
  }

  addBook(book: Book): Observable<Book[]> {
    return this.http.post<Book[]>(`${this.baseUrl}`, book);
  }

  updateBook(book: Book) : Observable<Book[]> {
    return this.http.put<Book[]>(this.baseUrl + `/${book.id}`, book);
  }

  deleteBook(book: Book) : Observable<Book[]> {
    return this.http.delete<Book[]>(`${this.baseUrl}/${book.id}`);
  }
}
