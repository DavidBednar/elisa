import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaResetPasswordComponent } from './reset-password.component';

const routes = [
    {
        path     : 'auth/reset-password',
        component: ElisaResetPasswordComponent
    }
];

@NgModule({
    declarations: [
        ElisaResetPasswordComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,

        ElisaSharedModule
    ]
})
export class ResetPasswordModule
{
}
