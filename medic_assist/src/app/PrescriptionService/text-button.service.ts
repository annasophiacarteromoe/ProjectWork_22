import { Injectable } from '@angular/core';
import {PassArrayService} from "./pass-array.service";
import {FormArrayService} from "./form-array.service";

@Injectable({
  providedIn: 'root'
})
export class TextButtonService {


  flag:boolean
  name:string;

  constructor(private formArray: FormArrayService,
              private medsArray: PassArrayService) {
    this.name='Create new prescritpion'
    this.flag = false

  }

  get getName(){
    return this.name;
  }

  set setName(string:string){
    this.name=string
  }

  get getFlag(){
    return this.flag
  }

  set setFlag(bool:boolean){
    this.flag = bool
  }

  changeFlag() {
    if (this.getForm().Doctor_name || this.getForm().Provider_number || this.getForm().Patient_name || this.getForm().Patient_DOB || this.getForm().Date || this.getMeds().length) {
      this.setFlag = true
    } else {
      this.setFlag = false
    }
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
