import { BookService } from './../../../services/book/book.service';
import { Book } from './../../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-index',
  templateUrl: './book-index.component.html',
  styleUrls: ['./book-index.component.css']
})
export class BookIndexComponent implements OnInit {

  books: Book[] = [];
  populateBook?: Book;

  constructor(private service: BookService) {
    
  }

  ngOnInit(): void {
    this.service.getBook().subscribe((result: Book[]) => (this.books = result));
  }

  refreshBookList(books: Book[]) {
    this.books = books;
  }

  addBook() {
    this.populateBook = new Book();
  }
  
  updateBook(book: Book) {
    this.populateBook = book;
  }

  deleteBook(book: Book) {
    this.populateBook = book;
  }
}
