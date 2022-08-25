import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/Students';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css'],
})
export class FormUpdateComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FormUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    public studentService: StudentServiceService
  ) {}

  formulario!: FormGroup;
  students?: Student;

  form = (this.formulario = new FormGroup(
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
  ));

  ngOnInit(): void {
    this.form.patchValue({
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      age: this.data.age,
      cep: this.data.address.cep,
      document: this.data.document,
      gender: this.data.gender,
      email: this.data.email,
    });
  }

  updateStudent(): void {
    console.log(this.data.id, this.formulario.value);
    this.studentService
      .updateStudent(this.data.id, this.formulario.value)
      .subscribe((data) => console.log('ID' + this.data.id + ' modificado'));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
