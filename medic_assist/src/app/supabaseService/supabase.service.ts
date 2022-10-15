import { Injectable } from '@angular/core'
import {
  AuthChangeEvent,
  createClient,
  Session,
  SupabaseClient,
} from '@supabase/supabase-js'
import { environment } from 'src/environments/environment'

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


  get allMedication(){
    return this.supabase.from('Medication').select()
  
  }

  get mediName(){
    return this.supabase.from('Medication').select('Medication_name')
  }


  

  
}