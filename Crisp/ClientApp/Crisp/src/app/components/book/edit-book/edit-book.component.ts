import { BookService } from './../../../services/book/book.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';



@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  @Input() book?: Book;
  @Output() subscribedBooks = new EventEmitter<Book[]>();

  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.service.getBook().subscribe(res => {});
  }

  addBook(book: Book) {
    this.service.addBook(book).subscribe((book: Book[]) => this.subscribedBooks.emit(book));
  }
 
  updateBook(book:Book) {
    this.service.updateHero(book).subscribe((book: Book[]) => this.subscribedBooks.emit(book));
  }

  deleteBook(book:Book) {
    this.service.deleteHero(book).subscribe((book: Book[]) => (this.subscribedBooks.emit(book)));
  }
}
