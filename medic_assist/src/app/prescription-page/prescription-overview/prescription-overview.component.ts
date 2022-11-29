import {Component, OnInit, ViewChild} from '@angular/core';
import {SearchPageComponent} from "../../search-page/search-page.component";
import {PassArrayService} from "../../PrescriptionService/pass-array.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-prescription-overview',
  templateUrl: './prescription-overview.component.html',
  styleUrls: ['./prescription-overview.component.css']
})
export class PrescriptionOverviewComponent implements OnInit {

  array: Observable<any> | undefined


  constructor(private arrayService: PassArrayService) { }

  ngOnInit(): void {
  }

  getArray(){
    return this.arrayService.returnArray()
  }

  onDelete(med: string) {
    // this.arrayService.deleteMed(med)

  }
}
