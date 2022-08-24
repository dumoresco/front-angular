import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
    private studentService: StudentServiceService
  ) {}

  ngOnInit(): void {}

  students!: Student;

  onNoClick(): void {
    this.dialogRef.close();
  }

  addUserForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    document: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  saveStudent() {
    this.studentService.saveStudent(this.students).subscribe((student) => {this.students.});
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
