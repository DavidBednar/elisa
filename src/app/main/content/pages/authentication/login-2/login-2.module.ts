import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaLogin2Component } from './login-2.component';

const routes = [
    {
        path     : 'auth/login-2',
        component: ElisaLogin2Component
    }
];

@NgModule({
    declarations: [
        ElisaLogin2Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,

        ElisaSharedModule
    ]
})
export class Login2Module
{
}
