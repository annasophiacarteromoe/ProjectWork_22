import {Injectable} from '@angular/core'
import {
  AuthChangeEvent,
  createClient,
  Session,
  SupabaseClient,
} from '@supabase/supabase-js'
import {environment} from 'src/environments/environment'
import {HttpResponseBase} from "@angular/common/http";
import {Prescription, SavedPrescriptions} from "../prescription.type";
import {Observable} from "rxjs";
import {MedicationInterface} from "../search-page/interfaces/medication-interface";

export interface Profile {
  username: string
  website: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    )
  }


  get allMedication() {
    return this.supabase.from('Medication').select()

  }

  async savePrescription(form: Prescription, meds: string[], descr: string[], warns: string[], symp: string[]) {
    await this.supabase.from('Prescriptions').insert({
      Provider_number: form.Provider_number,
      Patient_name: form.Patient_name,
      Patient_DOB: form.Patient_DOB,
      Doctor_name: form.Doctor_name,
      Comment: form.Comment,
      Medications: meds,
      Warnings: warns,
      Descriptions: descr,
      Symptoms: symp,
      Date: form.Date
    })
  }

  get showSaved(){
    return this.supabase.from('Prescriptions').select('Prescription_number, Date, Patient_name',)
  }

  showPrescriptionDetails(prescriptionNumber:number) {
    return this.supabase.from('Prescriptions').select().eq('Prescription_number', prescriptionNumber)
  }




}
