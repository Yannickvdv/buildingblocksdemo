import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import {
  AppComponent,
  UserListComponent,
  DashboardComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DashboardComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
