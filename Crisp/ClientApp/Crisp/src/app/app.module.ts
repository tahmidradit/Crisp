import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetCategoryComponent } from './category/get-category/get-category.component';
import { CategoryService } from 'src/app/services/category/category.service';
import { AddCategoryComponent } from './category/add-category/add-category.component';

@NgModule({
  declarations: [AppComponent, GetCategoryComponent, AddCategoryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
