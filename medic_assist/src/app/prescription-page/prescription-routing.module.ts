import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { SearchPageComponent } from '../search-page/search-page.component';
import { NewPrescriptionComponent } from './new-prescription/new-prescription.component';
import { PrescriptionPageMainComponent } from './prescription-page-main/prescription-page-main.component';
import {PrescriptionsOverviewComponent} from "./prescriptions-overview/prescriptions-overview.component";
import {SavedPrescriptionsComponent} from "./saved-prescriptions/saved-prescriptions.component";
import {PrescriptionDetailsComponent} from "./prescription-details/prescription-details.component";

const routes: Routes = [
  { path: '', component: PrescriptionPageMainComponent },
  { path: 'add', component: NewPrescriptionComponent },

  { path: 'show', component: PrescriptionsOverviewComponent},
  {path : 'add/show', component: PrescriptionsOverviewComponent},
  {path: 'showSaved', component: SavedPrescriptionsComponent},
  {path: 'showSaved/details', component:PrescriptionDetailsComponent},
  { path: 'search', component: SearchPageComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionRoutingModule { }
