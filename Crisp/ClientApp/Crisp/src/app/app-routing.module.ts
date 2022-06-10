import { HomepageComponent } from './homepage/homepage.component';
import { CategoryIndexComponent } from './category/category-index/category-index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'category', component: CategoryIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
