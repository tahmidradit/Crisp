import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BookService } from './../../../services/book/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-index',
  templateUrl: './book-index.component.html',
  styleUrls: ['./book-index.component.css']
})
export class BookIndexComponent implements OnInit {

  constructor(public service: BookService, private toastr: ToastrService) {}

  books$ : Book[] = [];
  book = new Book();

  ngOnInit(): void {
    this.getBooks();
  }

  preFillupdateBook(book: Book) {
    this.service.formData.get('name')?.setValue(book.name);
    this.service.formData.get('author')?.setValue(book.author);
    this.service.formData.get('isbn')?.setValue(book.isbn);
  }

  getBooks() {
    this.service.getBooks().subscribe(result => {
      this.books$ = result
    });
  }

  addBook() {
    this.service.addBook().subscribe(result => {
      this.getBooks();
      this.toastr.success("Book record added successfully !","Notification");
    });
  }
}
