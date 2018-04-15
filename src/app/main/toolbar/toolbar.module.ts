import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatToolbarModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaToolbarComponent } from 'app/main/toolbar/toolbar.component';
import { ElisaSearchBarModule, ElisaShortcutsModule } from '@elisa/components';

@NgModule({
    declarations: [
        ElisaToolbarComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatToolbarModule,

        ElisaSharedModule,
        ElisaSearchBarModule,
        ElisaShortcutsModule
    ],
    exports     : [
        ElisaToolbarComponent
    ]
})
export class ElisaToolbarModule
{
}
