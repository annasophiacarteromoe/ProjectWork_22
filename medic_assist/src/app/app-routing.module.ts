import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';



const routes: Routes = [
  { path: '', component: HomePageComponent }, 
  { path: 'prescription-page', loadChildren: () => import('./prescription-page/prescription.module').then(m=> m.PrescriptionModule)},
  { path: 'search-page', component: SearchPageComponent }, 
  { path: 'contact-page', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
