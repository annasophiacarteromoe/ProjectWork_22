import {Component, OnInit, ViewChild} from '@angular/core';
import {SearchPageComponent} from "../../search-page/search-page.component";
import {PassArrayService} from "../../PrescriptionService/pass-array.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-prescription-page-main',
  templateUrl: './prescription-page-main.component.html',
  styleUrls: ['./prescription-page-main.component.css']
})
export class PrescriptionPageMainComponent implements OnInit {

  array: Observable<any> | undefined


  constructor() { }

  ngOnInit(): void {

  }

}
