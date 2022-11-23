import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category/category.service';
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
  
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void { 
    this.getCategoriesList$ = this.categoryService.getCategoriesList();
  }

  addCategoryTrigger() {
     this.category = {
      name: null
    }
    this.categoryModalTitle = "Add Category";
  }

  modalClose() {
    this.getCategoriesList$ = this.categoryService.getCategoriesList();
  }

}
