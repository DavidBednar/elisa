import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaMailConfirmComponent } from './mail-confirm.component';

const routes = [
    {
        path     : 'auth/mail-confirm',
        component: ElisaMailConfirmComponent
    }
];

@NgModule({
    declarations: [
        ElisaMailConfirmComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        ElisaSharedModule
    ]
})
export class MailConfirmModule
{
}
