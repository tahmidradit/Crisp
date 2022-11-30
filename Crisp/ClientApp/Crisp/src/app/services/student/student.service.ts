import { Student } from './../../models/student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly baseUrl = 'https://localhost:7101/student';
  
  constructor(private httpClient: HttpClient) { }
  
  getStudent() : Observable<Student[]>  {
    return this.httpClient.get<Student[]>(this.baseUrl);
  }

  addStudent(student: Student) : Observable<Student[]> {
    return this.httpClient.post<Student[]>(this.baseUrl, student);
  }

  updateStudent(student: Student) : Observable<Student[]> {
    return this.httpClient.put<Student[]>(this.baseUrl + `/${student.id}`, student);
  }

  deleteStudent(student: Student) : Observable<Student[]> {
    return this.httpClient.delete<Student[]>(this.baseUrl + `/${student.id}`);
  }

  deleteAllStudents(student: Student) : Observable<Student[]> {
    return this.httpClient.delete<Student[]>(this.baseUrl);
  }
}
