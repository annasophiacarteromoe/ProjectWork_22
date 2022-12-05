import { Injectable } from '@angular/core';
import {MedicationInterface} from "../search-page/interfaces/medication-interface";

@Injectable({
  providedIn: 'root'
})
export class PassArrayService {
  meds2prescriptionArray: MedicationInterface[]

  constructor() {
    this.meds2prescriptionArray = []
  }

  showMedsArray():void {
    console.log(this.meds2prescriptionArray)
  }

  addMed(med:MedicationInterface):void{
    this.meds2prescriptionArray.push(med)
  }

  returnArray(): MedicationInterface[]{
    return this.meds2prescriptionArray
  }

  returnMedName(): string[]{
    let arr: string[] = []
    this.meds2prescriptionArray.forEach(value => {arr.push(value.Medication_name)})
    return arr
  }

  returnDescripions(): string[]{
  let arr: string[] = []
  this.meds2prescriptionArray.forEach(value => {arr.push(value.Description)})
  return arr
}
  returnWarnings(): string[]{
    let arr: string[] = []
    this.meds2prescriptionArray.forEach(value => {arr.push(value.Warnings)})
    return arr
  }
  returnSymptoms(): string[]{
    let arr: string[] = []
    this.meds2prescriptionArray.forEach(value => {arr.push(value.Symptoms)})
    return arr
  }

  clear(){
    this.meds2prescriptionArray = []
  }

  // deleteMed(med:string):void{ //could be used to delete
  //   this.meds2prescriptionArray.forEach((value,index)=>{
  //     if(value==med) this.meds2prescriptionArray.splice(index,1);
  //   });
  // }
}
