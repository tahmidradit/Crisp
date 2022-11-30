import { ToastrService } from 'ngx-toastr';
import { StudentService } from './../../../services/student/student.service';
import { Student } from './../../../models/student';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.css']
})
export class StudentIndexComponent implements OnInit {
  
  students$: Student[] = [];
  @Input() student = new Student();
  activateStudent: boolean =  false;
  
  constructor(private service: StudentService, private toastr: ToastrService) {}

  ngOnInit() : void {
    this.retriveStudents();
  }

  retriveStudents() {
    this.service.getStudent().subscribe(result => { 
      this.students$ = result;
    });
  }

  triggerStudentForm(student: Student) {
    this.activateStudent = true;
    this.student = student;
  }

  addStudent(student: Student) {
    this.service.addStudent(student).subscribe(result => {
      this.student;
      this.retriveStudents();
      this.toastr.success("New student added successfully !","Notification");
    });
  }

  updateStudent(student: Student) {
    this.activateStudent = true;
    this.service.updateStudent(student).subscribe(result => {
      this.retriveStudents();
      this.toastr.success("Student record updated successfully !","Notification");
    });
  }

  deleteStudent(student: Student) {
    this.service.deleteStudent(student).subscribe(result => {
      this.retriveStudents();
      this.toastr.info("Student record deleted successfully !");
    });
  }
}
