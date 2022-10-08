import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PrescriptionPageComponent } from './prescription-page/prescription-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent }, 
  { path: 'prescription-page', component: PrescriptionPageComponent }, 
  { path: 'search-page', component: SearchPageComponent }, 
  { path: 'contact-page', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
