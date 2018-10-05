import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(public http: HttpClient) { }

  getQuestions(){
    return this.http.get("http://grupor8.com/questions.php");
  }
}
