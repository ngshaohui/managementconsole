import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TechnicianAuthGuard } from './auth.guard';

import { TechnicianComponent } from './technician.component';
import { OverseerComponent } from './overseer/overseer.component';

const viewsRoutes: Routes = [
    {
        path: 'technician',
        component: TechnicianComponent,
        canActivate: [TechnicianAuthGuard],
        children: [
            { path: '', component: OverseerComponent }
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

export class TechnicianRouter { }