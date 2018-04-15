import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaForgotPassword2Component } from './forgot-password-2.component';

const routes = [
    {
        path     : 'auth/forgot-password-2',
        component: ElisaForgotPassword2Component
    }
];

@NgModule({
    declarations: [
        ElisaForgotPassword2Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,

        ElisaSharedModule,
    ]
})
export class ForgotPassword2Module
{
}
