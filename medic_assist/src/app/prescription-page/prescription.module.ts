import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionPageMainComponent } from './prescription-page-main/prescription-page-main.component';
import { NewPrescriptionComponent } from './new-prescription/new-prescription.component';
import { PrescriptionRoutingModule } from './prescription-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button";
import { PrescriptionsOverviewComponent } from './prescriptions-overview/prescriptions-overview.component';

@NgModule({
  declarations: [
    PrescriptionPageMainComponent,
    NewPrescriptionComponent,
    PrescriptionsOverviewComponent
  ],

    imports: [
        CommonModule,
        ReactiveFormsModule,
        PrescriptionRoutingModule,
        MatButtonModule
    ]
})
export class PrescriptionModule { }
