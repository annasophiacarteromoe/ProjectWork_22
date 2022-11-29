import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { Prescription } from '../../prescription.type';

declare var jsPDF: any;

@Component({
  selector: 'app-new-prescription',
  templateUrl: './new-prescription.component.html',
  styleUrls: ['./new-prescription.component.css']
})
export class NewPrescriptionComponent implements OnInit {
 
  protected newPrescriptionForm : FormGroup = this.fb.group({
    doctor_name: ['', Validators.required],
    provider_number: ['', [Validators.pattern("([0-9]*[,.])?[0-9]+"), Validators.required]],
    patient_name: ['', [Validators.required]],
    patient_dob: ['', [Validators.required]],
    comments: [''],
    date: ['' , Validators.required]
  });

  constructor(private router: Router,
              public fb: FormBuilder) { 
              }

  ngOnInit(): void {
  }

  onSubmit() {
    var p : Prescription = {
      doctor_name: this.doctor_name.value,
      provider_number: this.provider_number.value,
      patient_name: this.patient_name.value,
      patient_dob: this.patient_dob.value,
      comments: this.comments.value,
      date: this.date.value
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

  @ViewChild('content') content: ElementRef;
  public SavePDF(): void {  
    let content=this.content.nativeElement;  
    let doc = new jsPDF('l', 'pt', 'a4');  
    let _elementHandlers =  
    {  
      '#editor':function(_element: any){  
        return true;  
      }  
    };  
    doc.fromHTML(content.innerHTML,15,15,{  
  
      'width':190,  
      'elementHandlers':_elementHandlers  
    });  
  
    doc.save('test.pdf');  
  }  
}  
