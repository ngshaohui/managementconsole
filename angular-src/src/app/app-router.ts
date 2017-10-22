import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

export class AppRouter { }

// TODO reroute invalid routes
export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: '**', component: LoginComponent }
  ];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);