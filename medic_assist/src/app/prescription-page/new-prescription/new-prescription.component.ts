import {CommonModule} from '@angular/common';
import {Component, OnInit, ViewChild, ElementRef, ModuleWithComponentFactories} from '@angular/core';
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
import {PassArrayService} from "../../PrescriptionService/pass-array.service";
import {SupabaseService} from "../../supabaseService/supabase.service";
import {MedicationInterface} from "../../search-page/interfaces/medication-interface";
import {TextButtonService} from "../../PrescriptionService/text-button.service";
//import "jspdf";

// declare var jsPDF: any;


@Component({
  selector: 'app-new-prescription',
  templateUrl: './new-prescription.component.html',
  styleUrls: ['./new-prescription.component.css']
})
export class NewPrescriptionComponent implements OnInit{

  newPrescriptionForm: FormGroup = this.fb.group({
    doctor_name: ['', Validators.required],
    provider_number: ['', [Validators.pattern("([0-9]*[,.])?[0-9]+"), Validators.required]],
    patient_name: ['', [Validators.required]],
    patient_dob: ['', [Validators.required]],
    comments: [''],
    date: ['', Validators.required]
  });

  constructor(private router: Router,
              public fb: FormBuilder,
              private formArray: FormArrayService,
              private medsArray: PassArrayService,
              private supabase: SupabaseService,
              private flagService:TextButtonService
  ) {}

  ngOnInit(): void {
  }

  displayedColumns:string[]=['Medication_name', 'Description', 'Warning', 'Symptoms', 'Dosage', 'delete']
  dosageDict = new Map<number, string>()
  dosageArray: string[] = []

  onSubmit() {
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
    this.formArray.addFrom(this.comments.value, this.date.value, this.doctor_name.value, this.patient_dob.value, this.patient_name.value, this.provider_number.value)
    console.log(this.formArray.returnArray())
  }

  getMeds() {
    return this.medsArray.returnArray()
  }

  getForm() {
    return this.formArray.returnArray()
  }

  savePrescription() {
    this.onClick()
    for (let i = 0; i < this.dosageDict.size; i++) {
      // @ts-ignore
      this.dosageArray.push(this.dosageDict.get(i))
    }
    this.supabase.savePrescription(this.formArray.returnArray(), this.medsArray.returnMedName(), this.medsArray.returnDescripions(), this.medsArray.returnWarnings(), this.medsArray.returnSymptoms(), this.dosageArray)
    this.clearData()
  }

  goToSearchPage() {
    this.router.navigate(['/search-page'])
  }
  saveDosages(event: any, i: any) {
    this.dosageDict.set(i, event.target.value)
  }

  clearData(){
    this.medsArray.clear()
    this.dosageDict.clear()
    this.dosageArray = []
    this.formArray.clear()


  }

  onDelete(med: string) {
    // this.arrayService.deleteMed(med)

  }


  @ViewChild('content') content: ElementRef;

  public SavePDF(): void {
    let content = this.content.nativeElement;
    let doc = new jsPDF('l', 'pt', 'a4');
    let _elementHandlers =
      {
        '#editor': function (_element: any) {
          return true;
        }
      };

    doc.html(content, {
      callback: () => {
        doc.output('dataurlnewwindow');
      }, x: 30, y: 30, html2canvas: {scale: 0.8}
    });

    /*
    doc.fromHTML(content.innerHTML,15,15,{

      'width':190,
      'elementHandlers':_elementHandlers
    });
    */

    doc.save('test.pdf');
  }

  goBack() {
    this.router.navigate(['prescription-page/'])
  }




}
