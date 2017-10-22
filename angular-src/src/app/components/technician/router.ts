import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TechnicianAuthGuard } from './auth.guard';

import { TechnicianComponent } from './technician.component';

const viewsRoutes: Routes = [
    {
        path: 'technician',
        component: TechnicianComponent,
        canActivate: [TechnicianAuthGuard],
        children: [
            { path: '', component: TechnicianComponent }
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