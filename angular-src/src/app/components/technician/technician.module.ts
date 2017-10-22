import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';

import { TechnicianComponent } from './technician.component';
import { TechnicianNavbarComponent } from './navbar/navbar.component';

import { LoginService } from '../login/login.service';

import { TechnicianRouter } from './router';
import { TechnicianAuthGuard } from './auth.guard';
import { OverseerComponent } from './overseer/overseer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragulaModule,
    TechnicianRouter
  ],
  declarations: [
    TechnicianComponent,
    TechnicianNavbarComponent,
    OverseerComponent
  ],
  exports: [],
  providers: [
    LoginService,
    TechnicianAuthGuard,
  ]
})

export class TechnicianModule { }