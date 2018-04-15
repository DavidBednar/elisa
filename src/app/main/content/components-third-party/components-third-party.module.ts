import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ElisaSharedModule } from '@elisa/shared.module';

import { GoogleMapsModule } from './google-maps/google-maps.module';

import { ElisaNgxDatatableComponent } from './datatable/ngx-datatable.component';

const routes = [
    {
        path     : 'datatables/ngx-datatable',
        component: ElisaNgxDatatableComponent
    }
];

@NgModule({
    declarations: [
        ElisaNgxDatatableComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,

        NgxDatatableModule,

        ElisaSharedModule,

        GoogleMapsModule
    ],
})
export class ElisaComponentsThirdPartyModule
{
}
