import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Normally you might want to seperate this into its own NgModule
import {
  MatInputModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule,
  MatNativeDateModule
} from '@angular/material';

import {
  AppComponent,
  UserListComponent,
  DashboardComponent,
  SearchFieldsComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DashboardComponent,
    SearchFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
