import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SubscribeTermDialogComponent } from './../shared/subscribe-term-dialog/subscribe-term-dialog.component';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  constructor(public termAllowedDialog: MatDialog) {}

  ngOnInit(){
    localStorage.removeItem('data-form')
  }

  allowedTerm(): void {
    const dialogRef = this.termAllowedDialog.open(SubscribeTermDialogComponent, {
      width: '450px',
      data: {name: "Dialog Term subscribe"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
