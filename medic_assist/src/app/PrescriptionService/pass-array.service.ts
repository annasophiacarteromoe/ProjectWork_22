import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassArrayService {
  meds2prescriptionArray: string[]

  constructor() {
    this.meds2prescriptionArray = []
  }

  showMedsArray():void {
    console.log(this.meds2prescriptionArray)
  }

  addMed(med:string):void{
    this.meds2prescriptionArray.push(med)
  }

  returnArray(): string[]{
    return this.meds2prescriptionArray
  }

  // deleteMed(med:string):void{ //could be used to delete
  //   this.meds2prescriptionArray.forEach((value,index)=>{
  //     if(value==med) this.meds2prescriptionArray.splice(index,1);
  //   });
  // }
}