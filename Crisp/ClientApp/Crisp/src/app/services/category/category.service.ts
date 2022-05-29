import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  readonly categoryBaseUrl = 'https://localhost:7101/api';

  constructor(private http: HttpClient) {}

  getCategoriesList(): Observable<any[]> {
    return this.http.get<any>(this.categoryBaseUrl + '/category');
  }

  addCategory(data: any) {
    return this.http.post(this.categoryBaseUrl + '/category', data);
  }
}
