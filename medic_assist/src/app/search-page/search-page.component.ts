import { Component, NgModule, OnInit } from '@angular/core';
import { SupabaseService } from '../supabaseService/supabase.service';
import { MedicationInterface } from './interfaces/medication-interface';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { STRING_TYPE } from '@angular/compiler';



@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})

export class SearchPageComponent implements OnInit {

  myControl = new FormControl<string | MedicationInterface>('M');
  medicationData: MedicationInterface[] = [];
  filteredOptions!: Observable<MedicationInterface[]>;


  // if u want to search by medication name you have to change:
 

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit(){

    this.getMediData();


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.Symptoms;
        return name ? this.searchBySymptoms(name as string) : this.medicationData.slice(); //here this.searchBySymptoms -> this._filter
      }),
    );

  }

  async getMediData() {
    var mediData = (await this.supabase.allMedication).data;
    console.log( mediData)
    this.medicationData = mediData!
    
  //  var x = this.searchQueryTransform('increased thirst,urination')
  //  console.log(new RegExp(x))
  //   console.log(this.medicationData.filter(op => op.Symptoms.toLowerCase().match(new RegExp(x))))

  }

  // async getMediName(){
  //   var mediNameArr = (await this.supabase.mediName).data
  //   console.log(mediNameArr)
  //   this.options = mediNameArr!
  //   }

  displayFn(displayData: MedicationInterface): string {
    return displayData && displayData.Symptoms ? displayData.Symptoms : '';  //here displayData.Symptoms -> displayData.Medication_name
  }

  private _filter(name: string): MedicationInterface[] {
    const filterValue = name.toLowerCase();
    return this.medicationData.filter(option => option.Medication_name.toLowerCase().includes(filterValue));
  }


  searchBySymptoms(name: string): MedicationInterface[]{
    const filterValue = this.searchQueryTransform(name);

  console.log(this.medicationData.filter(op => op.Symptoms.toLowerCase().match(new RegExp(filterValue))))
  return this.medicationData.filter(op => op.Symptoms.toLowerCase().match(new RegExp(filterValue)))
  }

  searchQueryTransform(name: string): string{
    var array  =name.toLowerCase().replace(',',')|(^');
    array = '^(^'+array +')'

    return array
  }

}
