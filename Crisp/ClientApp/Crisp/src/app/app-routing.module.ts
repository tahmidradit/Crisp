import { AddCardComponent } from './card/add-card/add-card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoryIndexComponent } from './category/category-index/category-index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'category', component: CategoryIndexComponent },
  { path: 'add-card', component: AddCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
