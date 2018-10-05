import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../core/services/questions.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-profile',
  templateUrl: './set-profile.component.html',
  styleUrls: ['./set-profile.component.css']
})
export class SetProfileComponent implements OnInit {

  questions: any;
  public form: FormGroup;
  formsControls: FormControl[]
  loadingQuestions: boolean;
  constructor(
    public questionsService: QuestionsService,
    public router: Router,
    public _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(){
    this.loadingQuestions = true;
    this.questionsService.getQuestions().subscribe((response)=>{     
      this.questions = response;
      this._buildForm()
      this.loadingQuestions = false;
    });
  }

  _buildForm() {
    let $this = this;
    $this.formsControls = [];
    let obj = {};
    this.questions.forEach((val,index) => {
      console.log(val)
      if(val.type == 1){
        let aux = new FormControl(null, Validators.required);
        $this.formsControls.push(aux)
        obj['question_'+val.id] = aux
      }

      if(val.type == 2){
        val.sub_itens.forEach((val2,index2) => {
          let aux2 = new FormControl(null, Validators.required);
          $this.formsControls.push(aux2)
          obj['question_'+val.id+'_'+val2.id] = aux2
        })
      }
    });
    console.log(obj)
    this.form = this._fb.group(obj);  
  }

  onSubmit(){
    console.log(this.form.value)
    let x = this.form.value;
    localStorage.setItem('data-form', JSON.stringify(x))
    this.router.navigate(['/confirm-subscribe']);
  }

}
