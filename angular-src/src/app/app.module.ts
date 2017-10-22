import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { SupervisorModule } from './components/supervisor/supervisor.module';
import { TechnicianModule } from './components/technician/technician.module';

import { routes } from './app-router';
import { SupervisorComponent } from './components/supervisor/supervisor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SupervisorComponent
  ],
  imports: [
    BrowserModule,
    SupervisorModule,
    TechnicianModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
