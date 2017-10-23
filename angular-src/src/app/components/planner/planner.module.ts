import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';

import { PlannerComponent } from './planner.component';
import { PlannerNavbarComponent } from './navbar/navbar.component';

import { LoginService } from '../login/login.service';

import { PlannerRouter } from './router';
import { PlannerAuthGuard } from './auth.guard';
import { OverseerComponent } from './overseer/overseer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragulaModule,
    PlannerRouter
  ],
  declarations: [
    PlannerComponent,
    PlannerNavbarComponent,
    OverseerComponent
  ],
  exports: [],
  providers: [
    LoginService,
    PlannerAuthGuard,
  ]
})

export class TechnicianModule { }