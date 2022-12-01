import { Department } from 'src/app/models/department';
export class Student {
    id?: number;
    name: string = "";
    studentId: string = "";
    department?: Department;
    departmentId?: number;
}