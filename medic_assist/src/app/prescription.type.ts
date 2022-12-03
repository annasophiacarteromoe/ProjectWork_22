export interface Prescription {
    Doctor_name: string;
    Provider_number: number;
    Patient_name: string;
    Patient_DOB: string;
    Comment: string;
    Date: string;
  }

  export interface SavedPrescriptions{
    Prescription_number:number;
    Patient_name: string;
    Date: string;

  }

export interface PrescriptionDetails {
  Prescription_number:number;
  Doctor_name: string;
  Provider_number: number;
  Patient_name: string;
  Patient_DOB: string;
  Comment: string;
  Date: string;
  Medications:[]
  Descriptions: []
  Warnings:[]
  Symptoms:[]
}
