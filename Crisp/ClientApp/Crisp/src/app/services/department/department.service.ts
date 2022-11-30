import { Observable } from 'rxjs';
import { Department } from './../../models/department';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly baseUrl = 'https://localhost:7101/api/department';

  constructor(private http: HttpClient) { }

  getDepartments() : Observable<Department[]> {
    return this.http.get<Department[]>(this.baseUrl);
  }
}
