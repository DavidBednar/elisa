import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule, MatTabsModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaHighlightModule } from '@elisa/components';

import { ElisaHelperClassesComponent } from './helper-classes.component';
import { ElisaHelperClassesPaddingMarginComponent } from './tabs/padding-margin/padding-margin.component';
import { ElisaHelperClassesWidthHeightComponent } from './tabs/width-height/width-height.component';

const routes: Routes = [
    {
        path     : 'helper-classes',
        component: ElisaHelperClassesComponent
    }
];

@NgModule({
    declarations: [
        ElisaHelperClassesComponent,
        ElisaHelperClassesPaddingMarginComponent,
        ElisaHelperClassesWidthHeightComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,
        MatTabsModule,

        ElisaSharedModule,
        ElisaHighlightModule,
    ],
})
export class UIHelperClassesModule
{
}
