import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlannerAuthGuard } from './auth.guard';

import { PlannerComponent } from './planner.component';
import { OverseerComponent } from './overseer/overseer.component';
import { TaskmanagerComponent } from './taskmanager/taskmanager.component';

const viewsRoutes: Routes = [
    {
        path: 'planner',
        component: PlannerComponent,
        canActivate: [PlannerAuthGuard],
        children: [
            { path: '', component: TaskmanagerComponent }
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

export class PlannerRouter { }