import { ToastrService } from 'ngx-toastr';
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

  constructor(private categoryService: CategoryService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory()  {
    this.categoryService.getCategoriesList().subscribe(response => {
      
    });
  }
  addCategory() {
    var category = {
      name: this.name
    }
    this.categoryService.addCategory(category).subscribe(res => {
      
      var closeModal = document.getElementById('add-edit-modal-close');

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
    this.getCategory();
    this.toastr.success('Category Added', '');
  }
}
