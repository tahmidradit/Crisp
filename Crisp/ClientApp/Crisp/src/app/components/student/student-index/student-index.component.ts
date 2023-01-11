import { Observable } from 'rxjs';
import { DepartmentService } from './../../../services/department/department.service';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from './../../../services/student/student.service';
import { Student } from './../../../models/student';
import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.css']
})
export class StudentIndexComponent implements OnInit {
  
  students$: Student[] = [];
  departments$!: Observable<Department[]>;
  @Input() student = new Student();
  appearStudentForm: boolean =  false;
  fileName= 'ExcelSheet.xlsx';
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
    this.appearStudentForm = true;
    this.student = student;
  }

  triggerEditStudentForm(student: Student) {
    this.appearStudentForm = true;
    this.student = student;
  }

  clearForm(student: Student) {
    student.id = 0;
    student.name = ""; 
    student.departmentId = 0; 
    student.studentId = "";
    this.appearStudentForm = false; 
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
    this.appearStudentForm = true;
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

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('std');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}
