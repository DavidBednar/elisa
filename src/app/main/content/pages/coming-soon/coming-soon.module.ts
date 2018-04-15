import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaCountdownModule } from '@elisa/components';

import { ElisaComingSoonComponent } from './coming-soon.component';

const routes = [
    {
        path     : 'coming-soon',
        component: ElisaComingSoonComponent
    }
];

@NgModule({
    declarations: [
        ElisaComingSoonComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,

        ElisaSharedModule,
        ElisaCountdownModule
    ]
})
export class ComingSoonModule
{
}
