import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElisaSharedModule } from '@elisa/shared.module';

import { InvoiceService } from '../invoice.service';
import { ElisaInvoiceCompactComponent } from './compact.component';

const routes = [
    {
        path     : 'invoices/compact',
        component: ElisaInvoiceCompactComponent,
        resolve  : {
            search: InvoiceService
        }
    }
];

@NgModule({
    declarations: [
        ElisaInvoiceCompactComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        ElisaSharedModule
    ],
    providers   : [
        InvoiceService
    ]
})
export class InvoiceCompactModule
{
}
