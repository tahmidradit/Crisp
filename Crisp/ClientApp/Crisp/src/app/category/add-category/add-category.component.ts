import { Observable } from 'rxjs';
import { CategoryService } from './../../services/category/category.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  @Input() category:any;
  id: number = 0;
  name: string = "";

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.id = this.category.id;
    this.name = this.category.name;
  }

  addCategory() {
    var category = {
      name: this.name
    }
    this.categoryService.addCategory(category).subscribe(res => {
      var closeModal = document.getElementById('AddEditCategoryModal');
      if(closeModal) {
        closeModal.click();
      }

      var categoryAddingSuccess = document.getElementById('categoryAdd-toast-success');
      if(categoryAddingSuccess) {
        categoryAddingSuccess.style.display = "block";
      }
      setTimeout(() => {
        if(categoryAddingSuccess) {
          categoryAddingSuccess.style.display = "none";
        }
      }, 4000);
    });

    this.categoryService.getCategoriesList();

  }
}
