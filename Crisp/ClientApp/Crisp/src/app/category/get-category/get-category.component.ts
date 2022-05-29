import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrls: ['./get-category.component.css'],
})
export class GetCategoryComponent implements OnInit {
  
  getCategories$!: Observable<any[]>;

  constructor(private service: CategoryService) {}

  ngOnInit(): void {
    this.getCategories$ = this.service.getCategories();
  }
}
