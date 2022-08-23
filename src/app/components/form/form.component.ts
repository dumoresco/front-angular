import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<FormComponent>) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
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
