import { Component, NgModule, OnInit } from '@angular/core';
import { SupabaseService } from '../supabaseService/supabase.service';
import { MedicationInterface } from './interfaces/medication-interface';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';


export interface User {
  name: string;
}

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})

export class SearchPageComponent implements OnInit {

  // myControl = new FormControl<string | User>('');
  // options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  // filteredOptions: Observable<User[]> | undefined;


  medicationData: MedicationInterface[] = [];

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit(){

    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => {
    //     const name = typeof value === 'string' ? value : value?.name;
    //     return name ? this._filter(name as string) : this.options.slice();
    //   }),
    // );

    // var l = this.supabase.x
    // console.log((await l).data
    this.getMediData();
  }

  async getMediData() {
    var mediData = (await this.supabase.allMedication).data;
    console.log( mediData)
    this.medicationData = mediData!

  }


  // displayFn(user: User): string {
  //   return user && user.name ? user.name : '';
  // }

  // private _filter(name: string): User[] {
  //   const filterValue = name.toLowerCase();

  //   return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  // }

}
