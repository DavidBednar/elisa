import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaResetPassword2Component } from './reset-password-2.component';

const routes = [
    {
        path     : 'auth/reset-password-2',
        component: ElisaResetPassword2Component
    }
];

@NgModule({
    declarations: [
        ElisaResetPassword2Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,

        ElisaSharedModule
    ]
})
export class ResetPassword2Module
{
}
