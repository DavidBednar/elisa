import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaContentComponent } from 'app/main/content/content.component';

@NgModule({
    declarations: [
        ElisaContentComponent
    ],
    imports     : [
        RouterModule,

        ElisaSharedModule,
    ],
    exports: [
        ElisaContentComponent
    ]
})
export class ElisaContentModule
{
}
