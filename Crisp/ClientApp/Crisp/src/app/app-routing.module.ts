import { BookIndexComponent } from './components/book/book-index/book-index.component';
import { AddCardComponent } from './components/card/add-card/add-card.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CategoryIndexComponent } from './components/category/category-index/category-index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'category', component: CategoryIndexComponent },
  { path: 'add-card', component: AddCardComponent },
  { path: 'book-index', component: BookIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
