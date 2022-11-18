import {Injectable} from '@angular/core'
import {
  AuthChangeEvent,
  createClient,
  Session,
  SupabaseClient,
} from '@supabase/supabase-js'
import {environment} from 'src/environments/environment'
import {HttpResponseBase} from "@angular/common/http";
import {Prescription} from "../prescription.type";

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

  async savePrescription(form: Prescription, meds: string[]) {
    await this.supabase.from('Prescriptions').insert({
      Provider_number: form.provider_number,
      Patient_name: form.patient_name,
      Patient_DOB: form.patient_dob,
      Doc_name: form.doctor_name,
      Comment: form.comments,
      Medications: meds,
      Date: form.date
    })
    console.log(typeof form.date)
  }


}
