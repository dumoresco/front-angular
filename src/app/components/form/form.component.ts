import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Student } from 'src/app/models/Students';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { SuccsessComponent } from '../succsess/succsess.component';
// import { getInitialData } from 'src/app/components/student-table/student-table.component'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    public dialog: MatDialog,
    private studentService: StudentServiceService
  ) {}

  formulario!: FormGroup;
  students?: Student;
  router!: Router;

  ngOnInit(): void {
    this.formulario = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      document: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveStudent() {
    if (this.formulario.valid) {
      this.studentService
        .saveStudent(this.formulario.value)
        .subscribe((sucesso) => {
          console.log(
            'Estudante ' +
              this.formulario.value.firstName +
              ' ' +
              this.formulario.value.lastName +
              ' criado com sucesso!'
          );

          // window.location.reload();
          this.openSuccessModal();
          this.onNoClick();
        });
    }
  }

  openSuccessModal(): void {
    const dialogRef = this.dialog.open(SuccsessComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  providers:
    | [
        {
          provide: MatDialogRef<FormComponent>;
          useValue: {
            close: (dialogResult: any) => {};
          };
        }
      ]
    | undefined;
}
