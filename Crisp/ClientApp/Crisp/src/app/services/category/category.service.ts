import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
  readonly categoryBaseUrl = 'https://localhost:7101/api/category';

  constructor(private http: HttpClient) {}

  getCategoriesList(): Observable<any[]> {
    return this.http.get<any>(this.categoryBaseUrl);
  }

  addCategory(data: any) {
    return this.http.post(this.categoryBaseUrl, data);
  }
}
