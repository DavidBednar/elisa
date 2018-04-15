import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElisaSharedModule } from '@elisa/shared.module';

import { InvoiceService } from '../invoice.service';
import { ElisaInvoiceModernComponent } from './modern.component';

const routes = [
    {
        path     : 'invoices/modern',
        component: ElisaInvoiceModernComponent,
        resolve  : {
            search: InvoiceService
        }
    }
];

@NgModule({
    declarations: [
        ElisaInvoiceModernComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        ElisaSharedModule
    ],
    providers   : [
        InvoiceService
    ]
})
export class InvoiceModernModule
{
}
