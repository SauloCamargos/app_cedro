import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeTermDialogComponent } from './subscribe-term-dialog/subscribe-term-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [SubscribeTermDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule ,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  exports:[
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
