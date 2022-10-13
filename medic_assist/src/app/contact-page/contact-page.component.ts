import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { ContactService } from './contact.service';
import { QuestionInterface } from './question-interface';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor(private service: ContactService, private jumper: Router) { }
  ReportForm!: FormGroup;
  QuestionAnswer: QuestionInterface[] = [];

  ngOnInit(): void {
    this.ReportForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'feedback': new FormControl(null),
    });

    this.OnFetchQuestionAnswer();
  }


  OnPostQuestion(){
    
    var Question: QuestionInterface = {
      id: "",
      name: this.ReportForm.value.name,
      email: this.ReportForm.value.email,
      feedback: this.ReportForm.value.feedback,
      answer: ""
    }
    console.log(Question);
    this.service.PostQuestion(Question);
    this.jumper.navigate(['/']);

  }


  OnFetchQuestionAnswer(){
    this.service.FetchQuestionAnswer().pipe(
      map(responseData => {
        const postArray = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            postArray.push({...responseData[key], id: key})
          }
        }
        return postArray;
      })
    ).subscribe(data => {
      this.QuestionAnswer = data;
      console.log(this.QuestionAnswer);
    });
    console.log("Fetching Card Data");
  }

  OnRemoveQuestion(id:string, idx:number){
    this.QuestionAnswer.splice(idx, 1);
    this.service.RemoveQuestion(id).subscribe();
  }

}
