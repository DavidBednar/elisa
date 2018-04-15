import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaError404Component } from './error-404.component';

const routes = [
    {
        path     : 'errors/error-404',
        component: ElisaError404Component
    }
];

@NgModule({
    declarations: [
        ElisaError404Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        ElisaSharedModule
    ]
})
export class Error404Module
{
}
