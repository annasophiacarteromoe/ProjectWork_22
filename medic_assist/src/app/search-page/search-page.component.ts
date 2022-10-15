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

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit(){

    this.getMediData();
  }

  ngAfterViewInit(){

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.Symptoms;
        return name ? this.searchBySymptoms(name as string) : this.medicationData.slice();
      }),
    );
      
  }




  async getMediData() {
    var mediData = (await this.supabase.allMedication).data;
    console.log( mediData)
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

  displayFn(displayData: MedicationInterface): string {
    return displayData && displayData.Symptoms ? displayData.Symptoms : '';
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
    var array  =name.toLowerCase().replace(/,/gi,')(?=.*');
    array = '(?=.*'+array +')'
    

    return array
  }

}
