import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaLoginComponent } from './login.component';

const routes = [
    {
        path     : 'auth/login',
        component: ElisaLoginComponent
    }
];

@NgModule({
    declarations: [
        ElisaLoginComponent
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
export class LoginModule
{
}
