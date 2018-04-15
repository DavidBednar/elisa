import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaForgotPasswordComponent } from './forgot-password.component';

const routes = [
    {
        path     : 'auth/forgot-password',
        component: ElisaForgotPasswordComponent
    }
];

@NgModule({
    declarations: [
        ElisaForgotPasswordComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,

        ElisaSharedModule,
    ]
})
export class ForgotPasswordModule
{
}
