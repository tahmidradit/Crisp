import { Observable } from 'rxjs';
import { CategoryService } from './../../services/category/category.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.css']
})
export class CategoryIndexComponent implements OnInit {

  getCategoriesList$!: Observable<any[]>;
  categoryModalTitle:string = '';
  category:any;
  activeCategory: boolean = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategoriesList$ = this.categoryService.getCategoriesList();
  }

  addEditCategoryTrigger() {
     this.category = {
      id: 0,
      name: null,
    }
    this.categoryModalTitle = "Add Category";
    this.activeCategory = true;
    //   this.activeCategory = true;
    // if(this.category.id == 0) {
    //   this.categoryModalTitle = "Add Category";
    //   this.activeCategory = true;
    // }
    // else {
    //   this.categoryModalTitle = "Edit Category";
    //   this.activeCategory = true;
    // }
  }
}
