import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaNavbarComponent } from 'app/main/navbar/navbar.component';
import { ElisaNavigationModule } from '@elisa/components';

@NgModule({
    declarations: [
        ElisaNavbarComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,

        ElisaSharedModule,
        ElisaNavigationModule
    ],
    exports     : [
        ElisaNavbarComponent
    ]
})
export class ElisaNavbarModule
{
}
