import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  public students$?: Observable<Student[]>;
  student$!: Student[] | any;

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
    this.getInitialData();
  }

  getInitialData(): void {
    this.students$ = this.studentService.getStudents();
    this.students$.subscribe((data) => {
      this.student$ = data;
    });
  }

  deleteStudent(id: string) {
    console.log(id + ' deleted!');
    this.studentService.deleteStudent(id);
    window.location.reload();
  }

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'age',
    'gender',
    'document',
    'postalcode',
    'action',
  ];

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
