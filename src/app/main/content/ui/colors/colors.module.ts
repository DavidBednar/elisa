import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatIconModule, MatTabsModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaDemoModule } from '@elisa/components/demo/demo.module';

import { ElisaColorsComponent } from './colors.component';

const routes: Routes = [
    {
        path     : 'colors',
        component: ElisaColorsComponent
    }
];

@NgModule({
    declarations: [
        ElisaColorsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatTabsModule,

        ElisaSharedModule,
        ElisaDemoModule
    ]
})
export class UIColorsModule
{
}
