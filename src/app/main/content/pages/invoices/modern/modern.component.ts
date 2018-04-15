import { Component } from '@angular/core';

import { InvoiceService } from '../invoice.service';

@Component({
    selector   : 'elisa-invoice-modern',
    templateUrl: './modern.component.html',
    styleUrls  : ['./modern.component.scss']
})
export class ElisaInvoiceModernComponent
{
    invoice: any;

    constructor(private invoiceService: InvoiceService)
    {
        this.invoiceService.invoiceOnChanged
            .subscribe((invoice) => {
                this.invoice = invoice;
            });
    }

}
