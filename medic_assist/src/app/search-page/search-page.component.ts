import { Component, NgModule, OnInit } from '@angular/core';
import { SupabaseService } from '../supabaseService/supabase.service';
import { MedicationInterface } from './interfaces/medication-interface';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';



@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})

export class SearchPageComponent implements OnInit {

  myControl = new FormControl<string | MedicationInterface>('M');
  medicationData: MedicationInterface[] = [];
  filteredOptions!: Observable<MedicationInterface[]>;



 

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit(){

    this.getMediData();
    

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.Medication_name;
        return name ? this._filter(name as string) : this.medicationData.slice();
      }),
    );

    // var l = this.supabase.x
    // console.log((await l).data
    
  }

  async getMediData() {
    var mediData = (await this.supabase.allMedication).data;
    console.log( mediData)
    this.medicationData = mediData!

  }

  // async getMediName(){
  //   var mediNameArr = (await this.supabase.mediName).data
  //   console.log(mediNameArr)
  //   this.options = mediNameArr!
  //   }

  displayFn(displayData: MedicationInterface): string {
    return displayData && displayData.Medication_name ? displayData.Medication_name : '';
  }

  private _filter(name: string): MedicationInterface[] {
    const filterValue = name.toLowerCase();

    return this.medicationData.filter(option => option.Medication_name.toLowerCase().includes(filterValue));
  }

}
