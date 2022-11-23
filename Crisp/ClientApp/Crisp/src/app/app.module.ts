import { BookService } from './services/book/book.service';
import { CardService } from './services/card/card.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryService } from 'src/app/services/category/category.service';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { CategoryIndexComponent } from './components/category/category-index/category-index.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddCardComponent } from './components/card/add-card/add-card.component';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { ToastrModule } from 'ngx-toastr';
import { EditBookComponent } from './components/book/edit-book/edit-book.component';
import { BookIndexComponent } from './components/book/book-index/book-index.component';

@NgModule({
  declarations: [AppComponent, AddCategoryComponent, HomepageComponent, AddCardComponent, AddBookComponent, CategoryIndexComponent, EditBookComponent, BookIndexComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CategoryService, CardService, BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
