import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextButtonService {

  name:string;
  constructor() {
    this.name='Create new prescritpion'
  }

  get getName(){
    return this.name;
  }

  set setName(string:string){
    this.name=string
  }
}
