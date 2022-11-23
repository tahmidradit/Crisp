import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category/category.service';
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

      // var categoryAddingSuccess = document.getElementById('categoryAdd-toast-success');
      // if(categoryAddingSuccess) {
      //   categoryAddingSuccess.style.display = "block";
      // }
      // setTimeout(function() {
      //   if(categoryAddingSuccess) {
      //     categoryAddingSuccess.style.display = "none";
      //   }
      // }, 4000);
    })

    this.toastr.success('Category Added !', 'Notification');
  }
}
