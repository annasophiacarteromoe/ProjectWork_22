import { Component, OnInit } from '@angular/core';
import {PassArrayService} from "../../PrescriptionService/pass-array.service";
import {FormArrayService} from "../../PrescriptionService/form-array.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prescriptions-overview',
  templateUrl: './prescriptions-overview.component.html',
  styleUrls: ['./prescriptions-overview.component.css']
})
export class PrescriptionsOverviewComponent implements OnInit {

  constructor(private medsArray: PassArrayService, private formArray: FormArrayService, private router: Router) { }

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
    
  }
}
