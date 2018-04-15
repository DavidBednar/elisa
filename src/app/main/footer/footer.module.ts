import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaFooterComponent } from 'app/main/footer/footer.component';

@NgModule({
    declarations: [
        ElisaFooterComponent
    ],
    imports     : [
        RouterModule,

        MatButtonModule,
        MatIconModule,
        MatToolbarModule,

        ElisaSharedModule
    ],
    exports     : [
        ElisaFooterComponent
    ]
})
export class ElisaFooterModule
{
}
