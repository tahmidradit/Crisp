import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookService } from './../../../services/book/book.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-index',
  templateUrl: './book-index.component.html',
  styleUrls: ['./book-index.component.css']
})
export class BookIndexComponent implements OnInit {

  constructor(public service: BookService) {}

  books$ : Book[] = [];
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.service.getBooks().subscribe(res => {
      this.books$ = res
    });
  }
  addBook() {
    this.service.addBook().subscribe(res => {
      this.getBooks();
    });
  }
}
