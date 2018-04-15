import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from 'app/main/content/components/angular-material/material.module';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaHighlightModule } from '@elisa/components';
import { ElisaWidgetModule } from '@elisa/components/widget/widget.module';

import { EXAMPLE_LIST } from './example-components';
import { ElisaExampleViewerComponent } from './example-viewer/example-viewer';
import { ElisaAngularMaterialComponent } from './angular-material.component';

const routes: Routes = [
    {
        path    : 'angular-material',
        children: [
            {
                path     : ':id',
                component: ElisaAngularMaterialComponent
            }
        ]
    }
];

@NgModule({
    declarations   : [
        [...EXAMPLE_LIST],
        ElisaAngularMaterialComponent,
        ElisaExampleViewerComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MaterialModule,

        ElisaSharedModule,
        ElisaHighlightModule,
        ElisaWidgetModule
    ],
    entryComponents: EXAMPLE_LIST,
})
export class ElisaAngularMaterialModule
{
}

