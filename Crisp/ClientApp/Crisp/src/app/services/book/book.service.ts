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


  addBook(data:Book) {
    return this.http.post(this.baseUrl, data);
  }

  getBook() : Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }
}
