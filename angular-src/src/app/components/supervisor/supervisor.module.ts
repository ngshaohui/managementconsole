import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SupervisorRouter } from './router';
import { SupervisorAuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SupervisorRouter
  ],
  declarations: [
  ],
  exports: [],
  providers: [
    SupervisorAuthGuard
  ]
})

export class SupervisorModule { }