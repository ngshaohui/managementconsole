import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupervisorAuthGuard } from './auth.guard';

import { SupervisorComponent } from './supervisor.component';
import { OverseerComponent } from './overseer/overseer.component';
import { DeploymentComponent } from './deployment/deployment.component';

const viewsRoutes: Routes = [
    {
        path: 'supervisor',
        component: SupervisorComponent,
        canActivate: [SupervisorAuthGuard],
        children: [
            { path: '', component: OverseerComponent },
            { path: 'deployment', component: DeploymentComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(viewsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class SupervisorRouter { }