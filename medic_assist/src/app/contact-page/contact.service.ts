import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionInterface } from './question-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = "https://medicassist-ef10c-default-rtdb.firebaseio.com/contact.json";

  // delete_url + id.json
  delete_url = "https://medicassist-ef10c-default-rtdb.firebaseio.com/contact/"

  constructor(private http: HttpClient) { }

  PostQuestion(question: QuestionInterface){
    this.http.post(this.url, question).subscribe();
  }

  FetchQuestionAnswer(): Observable<QuestionInterface[]>{
    return this.http.get<QuestionInterface[]>(this.url);
  }

  RemoveQuestion(id: string){
    return this.http.delete(`${this.delete_url}/${id}.json`);
  }
}
