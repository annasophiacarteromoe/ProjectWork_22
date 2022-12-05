import {Injectable} from '@angular/core';
import {Prescription} from "../prescription.type";
import {TmplAstBoundAttribute} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class FormArrayService {
  formArray: Prescription = {
    Comment: "", Date: "", Doctor_name: "", Patient_DOB: "", Patient_name: "", Provider_number: 0
  };

  constructor() {
    this.formArray;
  }

  showPFormArray(): void {
    console.log(this.formArray)
  }

  addFrom(comment: string, dates: any, doc_name: string, pat_dob: string, pat_name: string, prov_num: number): void {
    this.formArray = {
      Comment: comment,
      Date: dates,
      Doctor_name: doc_name,
      Patient_DOB: pat_dob,
      Patient_name: pat_name,
      Provider_number: prov_num

    }
  }

  returnArray() {
    return this.formArray
  }

  clear(){
    this.formArray = {
      Comment: "", Date: "", Doctor_name: "", Patient_DOB: "", Patient_name: "", Provider_number: 0
    }
  }
}
