import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/Students';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { DialogData } from '../student-table/student-table.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddressComponent>,
    public studentService: StudentServiceService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  student!: Student;

  @Input()
  id?: string;

  ngOnInit(): void {
    this.studentService
      .getStudentsById(this.data.id)
      .subscribe((data) => (this.student = data));

    console.log(this.data.id);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
