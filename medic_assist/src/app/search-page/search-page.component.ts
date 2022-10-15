import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SupabaseService } from '../supabaseService/supabase.service';
import { MedicationInterface } from './interfaces/medication-interface';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';



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
  dis:boolean = true;

  constructor(private readonly supabase: SupabaseService) {}

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

    this.filteredSearchOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value =>{
        const name = typeof value === 'string' ? value : this._searchByMeds ? value?.Medication_name : value?.Symptoms;
        return name ? this._filter(name as string) : this.medicationData.slice();
      })
    )
      
  }




  async getMediData() {
    var mediData = (await this.supabase.allMedication).data;
    console.log( mediData);
    this.medicationData = mediData!
    // var x = this.searchQueryTransform('vision,fatigue')
    // console.log(x)
    // console.log(this.medicationData.filter(op => op.Symptoms.toLowerCase().match(new RegExp(x))))

  }

  // async getMediName(){
  //   var mediNameArr = (await this.supabase.mediName).data
  //   console.log(mediNameArr)
  //   this.options = mediNameArr!
  //   }

 

  private _filter(name: string): MedicationInterface[] {
    const filterValue = this.searchQueryTransform(name);
    return this.medicationData.filter(option => this._searchByMeds ? option.Medication_name.toLowerCase().match(new RegExp(filterValue)): option.Symptoms.toLowerCase().match(new RegExp(filterValue)));
  }

  displayFn(displayData: MedicationInterface): string { // searchByMeds undefined https://developercommunity.visualstudio.com/t/angular-typescript-class-objects-not-accessible-in/555338
    
    var display = this._searchByMeds ? displayData?.Medication_name : displayData?.Symptoms;

    return displayData && display ? display : '';
  }
  // searchBySymptoms(name: string): MedicationInterface[]{
  //   const filterValue = this.searchQueryTransform(name);

  // console.log(this.medicationData.filter(op => op.Symptoms.toLowerCase().match(new RegExp(filterValue))))
  // return this.medicationData.filter(op => op.Symptoms.toLowerCase().match(new RegExp(filterValue)))
  // }

  searchQueryTransform(name: string): string{
    var query = name.toLowerCase().replace(/,/gi,')(?=.*');
    query = '(?=.*'+ query +')';
    
   

    return query;
  }

}
