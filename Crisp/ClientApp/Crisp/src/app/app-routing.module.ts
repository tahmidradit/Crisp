import { HomepageComponent } from './homepage/homepage.component';
import { CategoryIndexComponent } from './category/category-index/category-index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'categoryIndex', component: CategoryIndexComponent },
  { path: 'index', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
