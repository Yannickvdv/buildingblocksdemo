import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

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
  SearchFieldsComponent,
  ChartsSidebarComponent,
  GendersBarChartComponent,
  BalanceLineChartComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DashboardComponent,
    SearchFieldsComponent,
    ChartsSidebarComponent,
    GendersBarChartComponent,
    BalanceLineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
