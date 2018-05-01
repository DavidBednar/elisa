import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDividerModule, MatListModule, MatSlideToggleModule, MatTooltipModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaQuickPanelComponent } from 'app/main/quick-panel/quick-panel.component';

@NgModule({
    declarations: [
        ElisaQuickPanelComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule,
        MatSlideToggleModule,
        MatTooltipModule,

        ElisaSharedModule,
    ],
    exports: [
        ElisaQuickPanelComponent
    ]
})
export class ElisaQuickPanelModule
{
}
