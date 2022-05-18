import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  readonly baseUrl = 'https://localhost:7101/api';

  constructor(private http: HttpClient) {}

  getCategory(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl + '/category');
  }
}
