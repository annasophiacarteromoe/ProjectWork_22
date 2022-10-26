import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SupabaseService } from '../supabaseService/supabase.service';
import { MedicationInterface } from './interfaces/medication-interface';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

// Questions: 
// - show whole table after loading the page

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})

export class SearchPageComponent implements OnInit, AfterViewInit {

  myControl = new FormControl<string | MedicationInterface>('');
  medicationData: MedicationInterface[] = [];
  filteredOptions!: Observable<MedicationInterface[]>;
  filteredSearchOptions!: Observable<MedicationInterface[]>;

  _searchByMeds: boolean = true;  
  content:string = "Medication"
  co:MedicationInterface[]=[];
  x!: any;
  constructor(private readonly supabase: SupabaseService) {}

  promtSearchBy(){
    console.log(this._searchByMeds);
    this.content = this._searchByMeds ? "Medication" : "Symptoms";
  }

  ngOnInit(){
    this.getMediData();
  }

  ngAfterViewInit(){

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : this._searchByMeds ? value?.Medication_name : value?.Symptoms;
        return name ? this._filter(name as string) : this.medicationData.slice();
      }),
    );
  }

  async getMediData() {
    var mediData = (await this.supabase.allMedication).data;
    console.log( mediData);
    this.medicationData = mediData!

  }


  private _filter(name: string): MedicationInterface[] {
    const filterValue = this.searchQueryTransform(name);
    return this.medicationData.filter(option => this._searchByMeds ? option.Medication_name.toLowerCase().match(new RegExp(filterValue)): option.Symptoms.toLowerCase().match(new RegExp(filterValue)));
  }

  displayFn(displayData: MedicationInterface): string {
    return displayData && displayData?.Medication_name ? displayData?.Medication_name : '';
  }

  searchQueryTransform(name: string): string{
    var query = name.toLowerCase().replace(/,/gi,')(?=.*');
    query = '(?=.*'+ query +')';

    return query;
  }

  changeAutocompletion(option: MedicationInterface){
    this.x = this._searchByMeds ? option.Medication_name : option.Symptoms;
  }

}
