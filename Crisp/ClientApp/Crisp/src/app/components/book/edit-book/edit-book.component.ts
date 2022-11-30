import { BookService } from './../../../services/book/book.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';



@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  @Input() book? : Book;
  @Output() subscribedBooks = new EventEmitter<Book[]>();

  constructor(private service: BookService) {}

  ngOnInit(): void {
    
  }

  addBook(book: Book) {
    //this.service.addBook(book).subscribe((books: Book[]) => (this.subscribedBooks.emit(books) ));
    this.service.addBook(book).subscribe(res => {
      this.subscribedBooks.emit(res);
      this.service.getBook().subscribe((book: Book[]) => (this.subscribedBooks.emit(book)));
    });
  }
 
  updateBook(book: Book) {
    //this.service.updateBook(book).subscribe((books: Book[]) => (this.subscribedBooks.emit(books)));
    this.service.updateBook(book).subscribe(res => {
      this.subscribedBooks.emit(res);
      this.service.getBook().subscribe((book: Book[]) => (this.subscribedBooks.emit(book)));
    });
  }

  deleteBook(book: Book) {
    this.service.deleteBook(book).subscribe((books: Book[]) => (this.subscribedBooks.emit(books)));
    //this.service.getBook().subscribe((book: Book[]) => (this.subscribedBooks.emit(book)));
  }
}
