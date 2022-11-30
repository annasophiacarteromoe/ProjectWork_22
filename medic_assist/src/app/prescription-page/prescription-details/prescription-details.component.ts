import { Component, OnInit } from '@angular/core';
import {SupabaseService} from "../../supabaseService/supabase.service";
import {PrescriptionNumberService} from "../../PrescriptionService/prescription-number.service";
import { PrescriptionDetails, SavedPrescriptions} from "../../prescription.type";
import {Router} from "@angular/router";
import {SavedPrescriptionsComponent} from "../saved-prescriptions/saved-prescriptions.component";

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent implements OnInit {

  constructor(private supabase: SupabaseService,private prescriptionNumber:PrescriptionNumberService, private router: Router) { }

  prescriptionArray:PrescriptionDetails[]=[];

  ngOnInit(): void {
    this.supabase.showPrescriptionDetails(this.prescriptionNumber.getNumber).then(data =>{
      // @ts-ignore
      this.prescriptionArray = data.data!
    })

  }

  getMeds():string[]{
    var arr = []
    this.prescriptionArray.forEach(value => {console.log(value.Medications)})
    arr.push(this.prescriptionArray.forEach(value => {arr.push(value.Medications)}))
    // @ts-ignore
    return arr[0]
  }

  goBack(){
    this.router.navigate(['prescription-page/showSaved'])
  }

}
