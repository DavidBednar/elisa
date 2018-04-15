import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaRegister2Component } from './register-2.component';

const routes = [
    {
        path     : 'auth/register-2',
        component: ElisaRegister2Component
    }
];

@NgModule({
    declarations: [
        ElisaRegister2Component
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
export class Register2Module
{
}
