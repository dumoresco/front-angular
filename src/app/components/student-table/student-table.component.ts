import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Students';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentServiceService) {}
  ngOnInit(): void {
    this.studentService
      .getStudents()
      .subscribe((data) => (this.students = data));
  }

  // ELEMENT_DATA: Student[] = [
  //   {
  //     firstName: 'Eduardo',
  //     lastName: 'Moresco',
  //     age: 20,
  //     gender: 'Masculino',
  //     document: '877.441.630-87',
  //     postalcode: '91740-840',
  //   },
  // ];

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'age',
    'gender',
    'document',
    'postalcode',
  ];
  // dataSource = this.ELEMENT_DATA;
}
