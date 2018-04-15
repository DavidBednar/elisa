import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule, MatListModule } from '@angular/material';

import { ElisaDemoContentComponent } from './demo-content/demo-content.component';
import { ElisaDemoSidenavComponent } from './demo-sidenav/demo-sidenav.component';

@NgModule({
    declarations: [
        ElisaDemoContentComponent,
        ElisaDemoSidenavComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports     : [
        ElisaDemoContentComponent,
        ElisaDemoSidenavComponent
    ]
})
export class ElisaDemoModule
{
}
