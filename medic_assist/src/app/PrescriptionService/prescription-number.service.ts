import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionNumberService {

  num: number = 0;

  constructor() {
    this.num = 0
  }

  setNumber(prescriptionNumber:number){
    this.num= prescriptionNumber
  }

  get getNumber(){
    return this.num
  }
}
