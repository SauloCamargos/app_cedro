import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsService } from './services/questions.service';

@NgModule({
  providers: [
    QuestionsService
  ]
})
export class CoreModule { }
