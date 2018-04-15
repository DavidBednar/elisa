import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatDividerModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaPricingStyle1Component } from './style-1/style-1.component';
import { ElisaPricingStyle2Component } from './style-2/style-2.component';
import { ElisaPricingStyle3Component } from './style-3/style-3.component';

const routes = [
    {
        path     : 'pricing/style-1',
        component: ElisaPricingStyle1Component
    },
    {
        path     : 'pricing/style-2',
        component: ElisaPricingStyle2Component
    },
    {
        path     : 'pricing/style-3',
        component: ElisaPricingStyle3Component
    }
];

@NgModule({
    declarations: [
        ElisaPricingStyle1Component,
        ElisaPricingStyle2Component,
        ElisaPricingStyle3Component
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDividerModule,

        ElisaSharedModule
    ]
})
export class PricingModule
{
}
