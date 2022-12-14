import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {NewPrescriptionComponent} from "./prescription-page/new-prescription/new-prescription.component";



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'prescription-page', loadChildren: () => import('./prescription-page/prescription.module').then(m=> m.PrescriptionModule)},
  { path: 'search-page', component: SearchPageComponent },
  { path: 'contact-page', component: ContactPageComponent },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
