import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, FormBuilder, SelectMultipleControlValueAccessor } from '@angular/forms';
import { ContactService } from './contact.service';
import { QuestionInterface } from './question-interface';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor(private service: ContactService, private jumper: Router, private dialogRef: MatDialog) { }

  ReportForm!: FormGroup;
  QuestionAnswer: QuestionInterface[] = [];
  FilteredQuestionAnswer: QuestionInterface[] = [];
  search : string = "";
  Filtered: boolean = false;
  FliterIdx: number[] = [];
  selections: string = "name";

  ngOnInit(): void {
    this.ReportForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'feedback': new FormControl(null),
    });

    this.OnFetchQuestionAnswer();
    console.log(this.QuestionAnswer)
  }

  displayFn(displayData: QuestionInterface): string {
    return displayData.answer; // this
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
    // this.jumper.navigate(['/contact-page']);
    // this.delay(2000)
    // window.location.reload()
    // this.OnFetchQuestionAnswer();
    this.QuestionAnswer.push(Question)
    this.ReportForm.reset()
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
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
    if(this.Filtered){
      this.QuestionAnswer.splice(this.FliterIdx[idx], 1);
      this.FilteredQuestionAnswer.splice(idx, 1);
    }
    else{
      this.QuestionAnswer.splice(idx, 1);
    }
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
  }

  filter(){

    console.log(this.search);
    this.FliterIdx = [];
    this.FilteredQuestionAnswer = [];

    if(this.search == ""){
      this.Filtered = false;
      return;
    }
    else{
      this.Filtered = true;
    }



    if(this.selections == "name"){
      console.log("Search By name");
      for(var index in this.QuestionAnswer){
        if(this.QuestionAnswer[index].name.includes(this.search)){
          this.FilteredQuestionAnswer.push(this.QuestionAnswer[index]);
          this.FliterIdx.push(+index);
        }
      }
    }
    else if(this.selections == "feedback"){
      console.log("Search By feedback");
      for(var index in this.QuestionAnswer){
        if(this.QuestionAnswer[index].feedback.includes(this.search)){
          this.FilteredQuestionAnswer.push(this.QuestionAnswer[index]);
          this.FliterIdx.push(+index);
        }
      }

    }
    console.log(this.FliterIdx);

  }

  reset(){
    // window.location.reload();
    this.search = ''
    this.filter()
  }


}
