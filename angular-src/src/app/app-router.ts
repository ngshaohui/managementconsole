import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export class AppRouter { }

export const appRoutes: Routes = [
    // { path: '', component: HomeComponent }
  ];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);