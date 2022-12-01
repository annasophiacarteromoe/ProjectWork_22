import { Component, OnInit } from '@angular/core';
import {SupabaseService} from "../../supabaseService/supabase.service";
import {PrescriptionNumberService} from "../../PrescriptionService/prescription-number.service";
import {SavedPrescriptions} from "../../prescription.type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-saved-prescriptions',
  templateUrl: './saved-prescriptions.component.html',
  styleUrls: ['./saved-prescriptions.component.css']
})
export class SavedPrescriptionsComponent implements OnInit {

  constructor(private readonly supabase: SupabaseService, private prescriptionNubmer:PrescriptionNumberService,  private router: Router) { }

  prescriptionArray:SavedPrescriptions[]=[];
  ngOnInit(){
    this.supabase.showSaved.then(data =>{
      // @ts-ignore
      this.prescriptionArray = data.data!
    })

  }

  showDetails(prescritpionNum: number) {
    this.prescriptionNubmer.setNumber(prescritpionNum)
  }

  goBack(){
    this.router.navigate(['prescription-page'])
  }
}