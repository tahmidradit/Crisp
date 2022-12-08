import { Observable } from 'rxjs';
import { Book } from './../../models/book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readonly baseUrl = 'https://localhost:7101/api/books';

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  formData = this.formBuilder.group({
    name: ['',[Validators.required]],
    author: ['',[Validators.required]],
    isbn: ['',[Validators.required]]
  });

  getBooks() : Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }

  addBook() {
    var data = {
      name: this.formData.value.name,
      author: this.formData.value.author,
      isbn: this.formData.value.isbn
    }
    return this.http.post(`${this.baseUrl}`, data);
  }

  updateBook(book: Book) : Observable<Book[]> {
    return this.http.put<Book[]>(this.baseUrl + `/${book.id}`, book);
  }

  deleteBook(book: Book) : Observable<Book[]> {
    return this.http.delete<Book[]>(`${this.baseUrl}/${book.id}`);
  }
}
