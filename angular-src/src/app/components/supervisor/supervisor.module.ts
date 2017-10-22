import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginService } from '../login/login.service';

import { SupervisorRouter } from './router';
import { SupervisorAuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SupervisorRouter
  ],
  declarations: [
  ],
  exports: [],
  providers: [
    LoginService,
    SupervisorAuthGuard
  ]
})

export class SupervisorModule { }