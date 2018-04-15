import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaRegisterComponent } from './register.component';

const routes = [
    {
        path     : 'auth/register',
        component: ElisaRegisterComponent
    }
];

@NgModule({
    declarations: [
        ElisaRegisterComponent
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
export class RegisterModule
{
}
