import { Component, OnInit } from '@angular/core';
import {SupabaseService} from "../../supabaseService/supabase.service";
import {PrescriptionNumberService} from "../../PrescriptionService/prescription-number.service";
import {Prescription, SavedPrescriptions} from "../../prescription.type";
import {Observable} from "rxjs";

@Component({
  selector: 'app-saved-prescriptions',
  templateUrl: './saved-prescriptions.component.html',
  styleUrls: ['./saved-prescriptions.component.css']
})
export class SavedPrescriptionsComponent implements OnInit {

  constructor(private readonly supabase: SupabaseService, private prescriptionNumer:PrescriptionNumberService) { }

  prescriptionArray:SavedPrescriptions[]=[];
  ngOnInit(){
    this.supabase.showSaved.then(data =>{
      this.prescriptionArray = data.data!
    })

  }

  some() {
    // this.prescriptionArray!.forEach(value => {value.slice().forEach(value1 => {value1.})})
    console.log(this.prescriptionArray)
  }
}
