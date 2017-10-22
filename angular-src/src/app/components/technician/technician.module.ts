import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TechnicianComponent } from './technician.component';

import { TechnicianRouter } from './router';
import { TechnicianAuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TechnicianRouter
  ],
  declarations: [
    TechnicianComponent
  ],
  exports: [],
  providers: [
    TechnicianAuthGuard
  ]
})

export class TechnicianModule { }