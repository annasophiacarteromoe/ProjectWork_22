import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabaseService/supabase.service';
import { MedicationInterface } from './interfaces/medication-interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  medicationData: MedicationInterface[] = [];

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit(){
    // var l = this.supabase.x
    // console.log((await l).data
    this.getMediData();
  }

  async getMediData() {
    var mediData = (await this.supabase.allMedication).data;
    console.log( mediData)
    this.medicationData = mediData!

  }

}
