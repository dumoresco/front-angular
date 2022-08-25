import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Students';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { AddressComponent } from '../address/address.component';
import { FormUpdateComponent } from '../form-update/form-update.component';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent implements OnInit {
  students: Student[] = [];
  student!: Student[];

  id?: string;

  firstName!: string;
  lastName!: string;
  age!: number;
  email!: string;
  cep!: string;
  document!: string;
  gender!: string;

  constructor(
    private studentService: StudentServiceService,
    public dialog: MatDialog,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data;
    });
  }

  deleteStudent(id: string) {
    console.log(id);
    this.studentService.deleteStudent(id);
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

  openEditStudent(
    firstName: string,
    lastName: string,
    age: number,
    document: string,
    cep: string,
    gender: string,
    email: string,
    id: string
  ): void {
    const dialogRef = this.dialog.open(FormUpdateComponent, {
      data: {
        id: id,
        firstName: firstName,
        lastName: lastName,
        age: age,
        document: document,
        address: {
          cep: cep,
        },
        gender: gender,
        email: email,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
