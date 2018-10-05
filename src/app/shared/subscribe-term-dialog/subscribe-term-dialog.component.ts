import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe-term-dialog',
  templateUrl: './subscribe-term-dialog.component.html',
  styleUrls: ['./subscribe-term-dialog.component.css']
})
export class SubscribeTermDialogComponent {
  allowedTerms: boolean;
  constructor(
    public dialogRef: MatDialogRef<SubscribeTermDialogComponent>,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      dialogRef.disableClose = true;
    }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  closeDialog(){
    this.dialogRef.close()
  }

  goToFinish(){
    this.dialogRef.close()
    this.router.navigate(['/confirm-subscribe']);
  }
}
