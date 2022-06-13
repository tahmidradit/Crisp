import { Observable } from 'rxjs';
import { CategoryService } from './../../services/category/category.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.css']
})
export class CategoryIndexComponent implements OnInit {

  getCategoriesList$!: Observable<any[]>;
  categoryModalTitle:string = '';
  category:any;
  
  constructor(private categoryService: CategoryService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCategoriesList$ = this.categoryService.getCategoriesList();
  }

  addCategoryTrigger() {
     this.category = {
      id: 0,
      name: null
    }
    this.categoryModalTitle = "Add Category";
  }

  modalClose() {
    this.getCategoriesList$ =  this.categoryService.getCategoriesList();
    this.toastr.success('Category Added', '');
  }

}
