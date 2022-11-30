import { Observable } from 'rxjs';
import { DepartmentService } from './../../../services/department/department.service';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from './../../../services/student/student.service';
import { Student } from './../../../models/student';
import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.css']
})
export class StudentIndexComponent implements OnInit {
  
  students$: Student[] = [];
  departments$!: Observable<Department[]>;
  @Input() student = new Student();
  activateStudent: boolean =  false;
  
  constructor(private service: StudentService,private departmentService: DepartmentService, private toastr: ToastrService) {}

  ngOnInit() : void {
    this.retriveStudents();
    this.departments$ = this.getDepartments();
  }

  retriveStudents() {
    this.service.getStudent().subscribe(result => { 
      this.students$ = result;
    });
  }

  triggerAddStudentForm(student: Student) {
    student.id = 0;
    this.clearForm(student);
    this.activateStudent = true;
    this.student = student;
  }

  triggerEditStudentForm(student: Student) {
    this.activateStudent = true;
    this.student = student;
  }

  clearForm(student: Student) {
    student.id = 0;
    student.name = ""; 
    student.departmentName = ""; 
    student.studentId = "";
    this.activateStudent = false; 
  }

  addStudent(student: Student) {
    this.service.addStudent(student).subscribe(result => {
      this.student;
      this.retriveStudents();
      this.toastr.success("New student added successfully !","Notification");
      this.clearForm(student);
    });
  }

  updateStudent(student: Student) {
    this.activateStudent = true;
    this.service.updateStudent(student).subscribe(result => {
      this.retriveStudents();
      this.toastr.success("Student record updated successfully !","Notification");
      this.clearForm(student);
    });
  }

  deleteStudent(student: Student) {
    this.service.deleteStudent(student).subscribe(result => {
      this.retriveStudents();
      this.toastr.info("Student record deleted successfully !");
    });
  }

  deleteAllStudents(student: Student) {
    this.service.deleteAllStudents(student).subscribe(result => {
      //this.retriveStudents();
      this.toastr.info("All students' record deleted !");
    });
  }

  getDepartments() {
    return this.departmentService.getDepartments();
  }
}
