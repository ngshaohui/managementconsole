import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ],
  exports: [],
  providers: [
    TechnicianAuthGuard
  ]
})

export class SupervisorModule { }