import {Component, OnInit, ViewChild} from '@angular/core';
import {SearchPageComponent} from "../../search-page/search-page.component";
import {PassArrayService} from "../../PrescriptionService/pass-array.service";

@Component({
  selector: 'app-prescription-overview',
  templateUrl: './prescription-overview.component.html',
  styleUrls: ['./prescription-overview.component.css']
})
export class PrescriptionOverviewComponent implements OnInit {

  constructor(private arrayService: PassArrayService) { }
  // @ViewChild('SearchPageComponent')

  ngOnInit(): void {
  }

  onclic() {
    console.log(this.arrayService.showMedsArray())
  }
}
