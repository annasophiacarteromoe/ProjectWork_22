import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionPageMainComponent } from './prescription-page-main/prescription-page-main.component';
import { NewPrescriptionComponent } from './new-prescription/new-prescription.component';
import { PrescriptionRoutingModule } from './prescription-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button";
import { SavedPrescriptionsComponent } from './saved-prescriptions/saved-prescriptions.component';
import { PrescriptionDetailsComponent } from './prescription-details/prescription-details.component';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    PrescriptionPageMainComponent,
    NewPrescriptionComponent,
    SavedPrescriptionsComponent,
    PrescriptionDetailsComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrescriptionRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
  ]
})
export class PrescriptionModule { }
