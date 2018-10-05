import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../core/services/questions.service';

@Component({
  selector: 'app-confirm-subscribe',
  templateUrl: './confirm-subscribe.component.html',
  styleUrls: ['./confirm-subscribe.component.css']
})
export class ConfirmSubscribeComponent implements OnInit {


  dataForm: any;
  questions: any;
  formsControlsValues: any;
  loadingQuestions: boolean;
  constructor(
    public questionsService: QuestionsService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('data-form')){
      this.dataForm = JSON.parse(localStorage.getItem('data-form'));
    }
    this.getQuestions();   
  }

  getQuestions(){
    this.loadingQuestions = true;
    this.questionsService.getQuestions().subscribe((response)=>{     
      this.questions = response;
      if(this.dataForm){
        this._buildForm()
      }
      this.loadingQuestions = false;
    });
  }

  _buildForm() {
    let $this = this;
    $this.formsControlsValues = [];
    let obj = {};
    console.log($this.dataForm)
    this.questions.forEach((val,index) => {
      console.log(val)
      if(val.type == 1){
        let aux = {};
        let currentValue = $this.dataForm['question_'+val.id];
        aux['question'] = val.question;
        aux['type'] = val.type;
        val.options.forEach(itemResponse => {
          
          if(itemResponse.value == currentValue){
            aux['response'] = itemResponse.label;
          }          
        });
        $this.formsControlsValues.push(aux)
      }

      if(val.type == 2){
        let aux = {};
        aux['question'] = val.question;
        aux['type'] = val.type;
        aux['topicos'] = [];
        val.sub_itens.forEach((val2,index2) => {
          let auxTopico = {};
          let currentValue = $this.dataForm['question_'+val.id+'_'+val2.id];
          auxTopico['label'] = val2.topico;    
          val2.options.forEach(itemResponse => {
            if(itemResponse.value == currentValue){
              auxTopico['response'] = itemResponse.label;
            }          
          });
          aux['topicos'].push(auxTopico)          
        })
        $this.formsControlsValues.push(aux)
      }
    });
    console.log($this.formsControlsValues)
     
  }

}
