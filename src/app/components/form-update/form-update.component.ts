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

  cep = this.data.address.cep ? this.data.address.cep.replace(/-/g, '') : '';

  ngOnInit(): void {
    this.formulario = new FormGroup({
      firstName: new FormControl(this.data.firstName, Validators.required),
      lastName: new FormControl(this.data.lastName, Validators.required),
      age: new FormControl(this.data.age, Validators.required),
      document: new FormControl(this.data.document, Validators.required),
      address: new FormControl(this.cep, Validators.required),
      gender: new FormControl(this.data.gender, Validators.required),
      email: new FormControl(this.data.email, Validators.required),
    });
  }

  updateStudent(): void {
    if (this.formulario.valid) {
      this.studentService
        .updateStudent(this.data.id, this.formulario.value)
        .subscribe((data) => console.log('ID' + this.data.id + ' modificado'));
    }
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
