import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/Students';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { AddressComponent } from '../address/address.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent implements OnInit {
  students: Student[] = [];
  student!: Student[];

  id!: string;

  constructor(
    private studentService: StudentServiceService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
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
    'id',
    'firstName',
    'lastName',
    'age',
    'gender',
    'document',
    'postalcode',
    'action',
  ];
  // dataSource = this.ELEMENT_DATA;

  openFullAddress(id: string): void {
    const dialogRef = this.dialog.open(AddressComponent, {
      width: '500px',
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openEditStudent(): void {
    const dialogRef = this.dialog.open(FormComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
