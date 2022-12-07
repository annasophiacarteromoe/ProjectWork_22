import { Injectable } from '@angular/core';
import {PassArrayService} from "./pass-array.service";
import {FormArrayService} from "./form-array.service";

@Injectable({
  providedIn: 'root'
})
export class TextButtonService {


  name:string;

  constructor(private formArray: FormArrayService,
              private medsArray: PassArrayService) {
    this.name='Create new prescritpion'
  }

  get getName(){
    return this.name;
  }

  set setName(string:string){
    this.name=string
  }

  changeButtonText() {
    if (this.getForm().Doctor_name || this.getForm().Provider_number || this.getForm().Patient_name || this.getForm().Patient_DOB || this.getForm().Date || this.getMeds().length) {
      this.setName = "Show current prescription"
    } else {
      this.setName = "Create new prescription"
    }
  }

  getForm(){
    return this.formArray.returnArray()
  }

  getMeds(){
    return this.medsArray.returnArray()
  }

}
