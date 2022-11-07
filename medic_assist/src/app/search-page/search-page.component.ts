import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SupabaseService } from '../supabaseService/supabase.service';
import { MedicationInterface } from './interfaces/medication-interface';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatInput } from '@angular/material/input';

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

  _searchBySymptoms: boolean = true;
  content:string = "Symptoms"
  constructor(private readonly supabase: SupabaseService) {}

  promtSearchBy(){
    this.content = this._searchBySymptoms ? "Symptoms" : "Medication";
  }

  ngOnInit(){
    this.supabase.allMedication.then(data => {
      this.medicationData = data.data!
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(""),
        map(value => {
          const name = typeof value === 'string' ? value : this._searchBySymptoms ? value?.Symptoms : value?.Medication_name;
          return name!.length > 0 ? this._filter(name as string) : this.medicationData.slice();
        }),
      );
    });
  }

  private _filter(name: string): MedicationInterface[] {
    const filterValue = this.searchQueryTransform(name);
    return this.medicationData.filter(option => this._searchBySymptoms ? option.Symptoms.toLowerCase().match(new RegExp(filterValue)) : option.Medication_name.toLowerCase().match(new RegExp(filterValue)));
  }

  displayFn(displayData: MedicationInterface): string {
    return displayData && displayData?.Medication_name ? displayData?.Medication_name : ''; // this
  }

  searchQueryTransform(name: string): string{
    var query = name.toLowerCase().replace(/,/gi,')(?=.*');
    query = '(?=.*'+ query +')';

    return query;
  }

  changeAutocompletion(option: MedicationInterface) {
   return this._searchBySymptoms ? option.Symptoms : option.Medication_name;
  }

}
