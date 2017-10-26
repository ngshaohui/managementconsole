import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula';

import { SupervisorComponent } from './supervisor.component';
import { SupervisorNavbarComponent } from './navbar/navbar.component';
import { OverseerComponent } from './overseer/overseer.component';

import { LoginService } from '../login/login.service';
import { APIService } from '../services/api.service';

import { SupervisorRouter } from './router';
import { SupervisorAuthGuard } from './auth.guard';
import { TaskComponent } from './task/task.component';
import { TechnicianComponent } from './technician/technician.component';
import { TaskmanagerComponent } from './taskmanager/taskmanager.component';
import { DeploymentComponent } from './deployment/deployment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DragulaModule,
    SupervisorRouter
  ],
  declarations: [
    SupervisorComponent,
    SupervisorNavbarComponent,
    OverseerComponent,
    TaskComponent,
    TechnicianComponent,
    TaskmanagerComponent,
    DeploymentComponent
  ],
  exports: [],
  providers: [
    LoginService,
    APIService,
    SupervisorAuthGuard
  ]
})

export class SupervisorModule { }