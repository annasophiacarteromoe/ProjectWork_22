import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionOverviewComponent } from './prescription-overview/prescription-overview.component';
import { NewPrescriptionComponent } from './new-prescription/new-prescription.component';
import { PrescriptionRoutingModule } from './prescription-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    PrescriptionOverviewComponent,
    NewPrescriptionComponent
  ],

    imports: [
        CommonModule,
        ReactiveFormsModule,
        PrescriptionRoutingModule,
        MatButtonModule
    ]
})
export class PrescriptionModule { }
