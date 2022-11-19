import { Component, OnInit } from '@angular/core';
import {PassArrayService} from "../../PrescriptionService/pass-array.service";
import {FormArrayService} from "../../PrescriptionService/form-array.service";
import {Router} from "@angular/router";
import {SupabaseService} from "../../supabaseService/supabase.service";

@Component({
  selector: 'app-prescriptions-overview',
  templateUrl: './prescriptions-overview.component.html',
  styleUrls: ['./prescriptions-overview.component.css']
})
export class PrescriptionsOverviewComponent implements OnInit {

  constructor(private medsArray: PassArrayService, private formArray: FormArrayService, private router: Router, private supabase: SupabaseService) { }

  ngOnInit(): void {
  }

  getMeds() {
    return this.medsArray.returnArray()
  }

  getForm(){
    return this.formArray.returnArray()
  }

  onDelete(med: string) {
    // this.arrayService.deleteMed(med)

  }

  goToSearchPage() {
    this.router.navigate(['/search-page'])
  }


  savePrescription() {
    this.supabase.savePrescription(this.formArray.returnArray(), this.medsArray.returnArray())
  }
}
