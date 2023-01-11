import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  readonly baseUrl = 'https://localhost:7101/api/Export';

  constructor(private http:HttpClient) { }

  exportExcel() {
    return this.http.get(this.baseUrl + '/Export');
  }
}
