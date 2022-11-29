
import {CommonModule} from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {catchError, Observable, throwError} from 'rxjs';
import {Prescription} from '../../prescription.type';
import {FormArrayService} from "../../PrescriptionService/form-array.service";
import jsPDF from 'jspdf';
//import "jspdf";

//declare var jsPDF2: any;


@Component({
  selector: 'app-new-prescription',
  templateUrl: './new-prescription.component.html',
  styleUrls: ['./new-prescription.component.css']
})
export class NewPrescriptionComponent implements OnInit {

  newPrescriptionForm: FormGroup = this.fb.group({
    doctor_name: ['', Validators.required],
    provider_number: ['', [Validators.pattern("([0-9]*[,.])?[0-9]+"), Validators.required]],
    patient_name: ['', [Validators.required]],
    patient_dob: ['', [Validators.required]],
    comments: [''],
    date: ['', Validators.required]
  });
  p: Prescription | undefined;

  constructor(private router: Router,
              public fb: FormBuilder,
              private fromArray: FormArrayService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.p = {
      Doctor_name: this.doctor_name.value,
      Provider_number: this.provider_number.value,
      Patient_name: this.patient_name.value,
      Patient_DOB: this.patient_dob.value,
      Comment: this.comments.value,
      Date: this.date.value
    };

    console.log(this.newPrescriptionForm.value)
  }

  get doctor_name(): FormControl {
    return this.newPrescriptionForm.get("doctor_name") as FormControl;
  }

  get provider_number(): FormControl {
    return this.newPrescriptionForm.get("provider_number") as FormControl;
  }

  get patient_name(): FormControl {
    return this.newPrescriptionForm.get("patient_name") as FormControl;
  }

  get patient_dob(): FormControl {
    return this.newPrescriptionForm.get("patient_dob") as FormControl;
  }

  get comments(): FormControl {
    return this.newPrescriptionForm.get("comments") as FormControl;
  }

  get date(): FormControl {
    return this.newPrescriptionForm.get("date") as FormControl;
  }


  onClick() {
    // console.log(this.doctor_name.value)
    this.fromArray.addFrom(this.comments.value, this.date.value, this.doctor_name.value, this.patient_dob.value, this.patient_name.value, this.provider_number.value)
  console.log(this.fromArray.returnArray())
  }

}

  @ViewChild('content') content: ElementRef;
  public SavePDF(): void {
    let content=this.content.nativeElement;
    let doc = new jsPDF();
    let _elementHandlers =
    {
      '#editor':function(_element: any){
        return true;
      }
    };
    //doc.html(content.innerHTML,15,15,{
   // });

  //  doc.save('test.pdf');
  }
}
