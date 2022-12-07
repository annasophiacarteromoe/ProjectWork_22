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

  constructor(private textButtonService: TextButtonService,) {}

  ngOnInit(): void {
    this.textButtonService.changeButtonText()
    this.buttonText = this.textButtonService.getName
  }

}
