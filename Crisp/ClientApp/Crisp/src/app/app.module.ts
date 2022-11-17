import { CardService } from './services/card/card.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryService } from 'src/app/services/category/category.service';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { CategoryIndexComponent } from './category/category-index/category-index.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddCardComponent } from './card/add-card/add-card.component';
import { AddBookComponent } from './components/book/add-book/add-book.component';

@NgModule({
  declarations: [AppComponent, AddCategoryComponent, CategoryIndexComponent, HomepageComponent, AddCardComponent, AddBookComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService, CardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
