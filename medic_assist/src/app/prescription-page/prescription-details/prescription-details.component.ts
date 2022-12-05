import { Component, OnInit } from '@angular/core';
import {SupabaseService} from "../../supabaseService/supabase.service";
import {PrescriptionNumberService} from "../../PrescriptionService/prescription-number.service";
import { PrescriptionDetails} from "../../prescription.type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent implements OnInit {

  constructor(private supabase: SupabaseService,private prescriptionNumber:PrescriptionNumberService, private router: Router) { }

  prescriptionArray:PrescriptionDetails[]=[];
  displayedColumnsCredentials:string[]=['Provider_number', 'Date', 'Patient_DOB' ,'Patient_name', 'Doctor_name', 'Comment'];
  displayedColumnsMeds:string[]=['Medication_name', 'Description', 'Warning', 'Symptoms', 'Dosage']

  ngOnInit(): void {
    this.supabase.showPrescriptionDetails(this.prescriptionNumber.getNumber).then(data =>{
      // @ts-ignore
      this.prescriptionArray = data.data!
    })
  }
  getMeds():string[]{
    let arr = []
    // this.prescriptionArray.forEach(value => {console.log(value.Medications)})
    arr.push(this.prescriptionArray.forEach(value => {arr.push(value.Medications)}))
    // @ts-ignore
    return arr[0]
  }

  getDescriptions():string[]{
    let arr = []
    // this.prescriptionArray.forEach(value => {console.log(value.Descriptions)})
    arr.push(this.prescriptionArray.forEach(value => {arr.push(value.Descriptions)}))
    // @ts-ignore
    return arr[0]
  }
  getWarning():string[]{
    let arr = []
    // this.prescriptionArray.forEach(value => {console.log(value.Descriptions)})
    arr.push(this.prescriptionArray.forEach(value => {arr.push(value.Warnings)}))
    // @ts-ignore
    return arr[0]
  }
  getSymptoms():string[]{
    let arr = []
    // this.prescriptionArray.forEach(value => {console.log(value.Descriptions)})
    arr.push(this.prescriptionArray.forEach(value => {arr.push(value.Symptoms)}))
    // @ts-ignore
    return arr[0]
  }

  getDosage():string[]{
    let arr = []
    this.prescriptionArray.forEach(value => {console.log(value.Dosage)})
    arr.push(this.prescriptionArray.forEach(value => {arr.push(value.Dosage)}))
    // @ts-ignore
    return arr[0]
  }


  goBack(){
    this.router.navigate(['prescription-page/showSaved'])
  }

}
