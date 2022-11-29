import { ToastrService } from 'ngx-toastr';
import { StudentService } from './../../../services/student/student.service';
import { Student } from './../../../models/student';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.css']
})
export class StudentIndexComponent implements OnInit {
  
  students$: Student[] = [];
  @Input() student = new Student();

  constructor(private service: StudentService, private toastr: ToastrService) {}

  ngOnInit() : void {
    this.retriveStudents();
  }

  retriveStudents() {
    this.service.getStudent().subscribe(result => { 
      this.students$ = result;
    });
  }

  addStudent(student: Student) {
    this.service.addStudent(student).subscribe(res => {
      this.student;
      this.retriveStudents();
      this.toastr.success("Student Added !","Notification");
    });
  }

  updateStudent(student: Student) {}

  deleteStudent(student: Student) {}
}
