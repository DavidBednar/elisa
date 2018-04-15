import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaLockComponent } from './lock.component';

const routes = [
    {
        path     : 'auth/lock',
        component: ElisaLockComponent
    }
];

@NgModule({
    declarations: [
        ElisaLockComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        ElisaSharedModule
    ]
})
export class LockModule
{
}
