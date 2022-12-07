import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {TextButtonService} from "../../PrescriptionService/text-button.service";
import {FormArrayService} from "../../PrescriptionService/form-array.service";
import {PassArrayService} from "../../PrescriptionService/pass-array.service";

@Component({
  selector: 'app-prescription-page-main',
  templateUrl: './prescription-page-main.component.html',
  styleUrls: ['./prescription-page-main.component.css']
})
export class PrescriptionPageMainComponent implements OnInit {

  array: Observable<any> | undefined

  buttonText = this.textButtonService.getName

  constructor(private textButtonService: TextButtonService,
              private formArray: FormArrayService,
              private medsArray: PassArrayService) {
  }


  ngOnInit(): void {
    this.textButtonService.changeButtonText()
    this.buttonText = this.textButtonService.getName
  }


//   changeButtonText() {
//     if (this.getForm().Doctor_name || this.getForm().Provider_number || this.getForm().Patient_name || this.getForm().Patient_DOB || this.getForm().Date || this.getMeds().length) {
//       this.textButtonService.setName = "Show current prescription"
//     } else {
//       this.textButtonService.setName = "Create new prescription"
//     }
//   }
//
//   getForm(){
//     return this.formArray.returnArray()
//   }
//
//   getMeds(){
//     return this.medsArray.returnArray()
//   }
// }
}
