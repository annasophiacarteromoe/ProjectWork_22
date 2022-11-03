import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NewPrescriptionComponent } from './new-prescription/new-prescription.component';
import { PrescriptionOverviewComponent } from './prescription-overview/prescription-overview.component';

const routes: Routes = [
  { path: '', component: PrescriptionOverviewComponent },
  { path: 'add', component: NewPrescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionRoutingModule { }
