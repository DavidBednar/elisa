import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule, MatTabsModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaHighlightModule } from '@elisa/components';

import { ElisaTypographyComponent } from './typography.component';
import { ElisaTypographyHeadingsComponent } from './tabs/headings/headings.component';
import { ElisaTypographyInlineTextElementsComponent } from './tabs/inline-text-elements/inline-text-elements.component';
import { ElisaTypographyBlockquotesListsComponent } from './tabs/blockquotes-lists/blockquotes-lists.component';
import { ElisaTypographyHelpersComponent } from './tabs/helpers/helpers.component';

const routes: Routes = [
    {
        path     : 'typography',
        component: ElisaTypographyComponent
    }
];

@NgModule({
    declarations: [
        ElisaTypographyComponent,
        ElisaTypographyHeadingsComponent,
        ElisaTypographyInlineTextElementsComponent,
        ElisaTypographyBlockquotesListsComponent,
        ElisaTypographyHelpersComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,
        MatTabsModule,

        ElisaSharedModule,
        ElisaHighlightModule
    ]
})
export class UITypographyModule
{
}
