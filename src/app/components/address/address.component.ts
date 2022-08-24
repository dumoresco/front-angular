import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/Students';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddressComponent>,
    public studentService: StudentServiceService
  ) {}

  // fetch(): void {
  //   if (!!this.data.id) {
  //     setTimeout(() => this.student.map((index) => console.log(index)));
  //   }
  // }

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}