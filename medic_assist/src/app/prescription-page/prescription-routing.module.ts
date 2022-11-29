import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { SearchPageComponent } from '../search-page/search-page.component';
import { NewPrescriptionComponent } from './new-prescription/new-prescription.component';
import { PrescriptionOverviewComponent } from './prescription-overview/prescription-overview.component';

const routes: Routes = [
  { path: '', component: PrescriptionOverviewComponent },
  { path: 'add', component: NewPrescriptionComponent },
  { path: 'search', component: SearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionRoutingModule { }
