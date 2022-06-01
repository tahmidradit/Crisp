import { Observable } from 'rxjs';
import { CategoryService } from './../../services/category/category.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


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

  triggerCategory() {
     this.category = {
      id: 0,
      name: null,
    };
    if(this.category.id == 0) {
      this.categoryModalTitle = "Add Category";
    }
    else {
      this.categoryModalTitle = "Edit Category";
    }
  }
  

}
