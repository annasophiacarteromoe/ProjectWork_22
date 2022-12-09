import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from "@angular/material/dialog";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import {SearchPageComponent} from "./search-page/search-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationBarComponent,
    SearchPageComponent,
    ContactPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [PopUpComponent]
})
export class AppModule { }
