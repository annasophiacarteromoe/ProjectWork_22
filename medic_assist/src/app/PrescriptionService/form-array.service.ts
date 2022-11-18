import {Injectable} from '@angular/core';
import {Prescription} from "../prescription.type";
import {TmplAstBoundAttribute} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class FormArrayService {
  formArray: Prescription = {
    comments: "", date: "", doctor_name: "", patient_dob: "", patient_name: "", provider_number: 0

  };

  constructor() {
    this.formArray;
  }

  showPFormArray(): void {
    console.log(this.formArray)
  }

  addFrom(comment: string, dates: any, doc_name: string, pat_dob: string, pat_name: string, prov_num: number): void {
    this.formArray = {
      comments: comment,
      date: dates,
      doctor_name: doc_name,
      patient_dob: pat_dob,
      patient_name: pat_name,
      provider_number: prov_num

    }
  }

  returnArray() {
    return this.formArray
  }
}
