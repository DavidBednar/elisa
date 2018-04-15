import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatExpansionModule, MatIconModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { FaqService } from './faq.service';
import { ElisaFaqComponent } from './faq.component';

const routes = [
    {
        path     : 'faq',
        component: ElisaFaqComponent,
        resolve  : {
            faq: FaqService
        }
    }
];

@NgModule({
    declarations: [
        ElisaFaqComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatExpansionModule,
        MatIconModule,

        ElisaSharedModule
    ],
    providers   : [
        FaqService
    ]
})
export class FaqModule
{
}
