import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatInputModule, MatSelectModule, MatOptionModule, MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { SupervisorModule } from './components/supervisor/supervisor.module';

import { routes } from './app-router';
import { SupervisorComponent } from './components/supervisor/supervisor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SupervisorModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    routes
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
