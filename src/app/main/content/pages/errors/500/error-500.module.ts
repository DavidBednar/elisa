import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaError500Component } from './error-500.component';

const routes = [
    {
        path     : 'errors/error-500',
        component: ElisaError500Component
    }
];

@NgModule({
    declarations: [
        ElisaError500Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        ElisaSharedModule
    ]
})
export class Error500Module
{
}
