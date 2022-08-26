import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-succsess',
  templateUrl: './succsess.component.html',
  styleUrls: ['./succsess.component.css'],
})
export class SuccsessComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SuccsessComponent>) {}

  onNoClick(): void {
    setTimeout(() => {
      this.dialogRef.close();
      window.location.reload();
    }, 3000);
  }

  ngOnInit(): void {
    this.onNoClick();
  }
}
