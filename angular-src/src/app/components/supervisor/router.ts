import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupervisorAuthGuard } from './auth.guard';

import { SupervisorComponent } from './supervisor.component';

const viewsRoutes: Routes = [
    {
        path: 'supervisor',
        component: SupervisorComponent,
        canActivate: [SupervisorAuthGuard],
        children: [
            { path: '', component: SupervisorComponent }
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