import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SubscribeTermDialogComponent } from './shared/subscribe-term-dialog/subscribe-term-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { InitialComponent } from './initial/initial.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmSubscribeComponent } from './confirm-subscribe/confirm-subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    ConfirmSubscribeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,  
    SharedModule
  ],
  entryComponents:[
    SubscribeTermDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
