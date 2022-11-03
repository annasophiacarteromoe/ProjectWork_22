import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { ContactService } from './contact.service';
import { QuestionInterface } from './question-interface';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor(private service: ContactService, private jumper: Router, private dialogRef: MatDialog) { }
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
    
    alert("Submission Success!")

    var Question: QuestionInterface = {
      id: "",
      name: this.ReportForm.value.name,
      email: this.ReportForm.value.email,
      feedback: this.ReportForm.value.feedback,
      answer: ""
    }
    this.service.PostQuestion(Question);

    // this.OpenDialog();
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

  OpenDialog(){
    const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.position = {
        'top': '0',
        left: '0'
      };
    this.dialogRef.open(PopUpComponent, dialogConfig);
  }

}
