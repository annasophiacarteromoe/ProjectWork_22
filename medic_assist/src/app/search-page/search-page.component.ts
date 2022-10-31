import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SupabaseService } from '../supabaseService/supabase.service';
import { MedicationInterface } from './interfaces/medication-interface';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatInput } from '@angular/material/input';

// Questions: 
// - show whole table after loading the page

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})

export class SearchPageComponent implements OnInit {

  myControl = new FormControl<string | MedicationInterface>('');
  medicationData: MedicationInterface[] = [];
  filteredOptions!: Observable<MedicationInterface[]>;
  filteredSearchOptions!: Observable<MedicationInterface[]>;
  // inputVal: string | MedicationInterface = "";
  _searchByMeds: boolean = false;  
  content:string = "Symptoms"
  co:MedicationInterface[]=[];
  x!: any;

  constructor(private readonly supabase: SupabaseService) {}

  promtSearchBy(){
    // console.log(this._searchByMeds);
    this.content = this._searchByMeds ? "Medication" : "Symptoms";
  }

  ngOnInit(){
    this.supabase.allMedication.then(data => {
      this.medicationData = data.data!
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(""),
        map(value => {
          // if(this._searchByMeds) {
            // this.inputVal = value!
          // }
          // this.inputVal = typeof value === 'string' ? value : value?.Medication_name!;
          const name = typeof value === 'string' ? value : this._searchByMeds ? value?.Medication_name : value?.Symptoms;
          return name!.length > 0 ? this._filter(name as string) : this.medicationData.slice();
        }),
      );
    });
  }

  private _filter(name: string): MedicationInterface[] {
    const filterValue = this.searchQueryTransform(name);
    return this.medicationData.filter(option => this._searchByMeds ? option.Medication_name.toLowerCase().match(new RegExp(filterValue)): option.Symptoms.toLowerCase().match(new RegExp(filterValue)));
  }

  displayFn(displayData: MedicationInterface): any {
    // return this.myControl.value ?? "not set"
    console.log('d')
    console.log(this.myControl);
    console.log('dd')
    // return this.inputVal
    return displayData && displayData?.Medication_name ? displayData?.Medication_name : ''; // this
    
    // return this.myControl.value?.toString.name;
  }

  searchQueryTransform(name: string): string{
    var query = name.toLowerCase().replace(/,/gi,')(?=.*');
    query = '(?=.*'+ query +')';

    return query;
  }

  changeAutocompletion(option: MedicationInterface) {
   return this._searchByMeds ? option.Medication_name : option.Symptoms;
  }

}
