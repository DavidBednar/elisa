import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaMaintenanceComponent } from './maintenance.component';

const routes = [
    {
        path     : 'maintenance',
        component: ElisaMaintenanceComponent
    }
];

@NgModule({
    declarations: [
        ElisaMaintenanceComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        ElisaSharedModule
    ]
})
export class MaintenanceModule
{
}
