import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { identity } from 'rxjs';
import { Student } from 'src/app/models/Students';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    private studentService: StudentServiceService,
    private router: Router
  ) {}

  formulario!: FormGroup;
  students?: Student;
  ngOnInit(): void {
    this.formulario = new FormGroup(
      {
        firstName: new FormControl(),
        lastName: new FormControl(),
        age: new FormControl(),
        document: new FormControl(),
        cep: new FormControl(),
        gender: new FormControl(),
        email: new FormControl(),
      },
      [Validators.required]
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveStudent() {
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
        this.router.navigate(['home']);
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
