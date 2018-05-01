import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatIconModule, MatListModule, MatMenuModule, MatSelectModule, MatSlideToggleModule, MatTabsModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaCountdownModule, ElisaHighlightModule, ElisaMaterialColorPickerModule, ElisaWidgetModule } from '@elisa/components';

import { ElisaAngularMaterialModule } from './angular-material/angular-material.module';
import { ElisaCardsDocsComponent } from './cards/cards.component';
import { ElisaCountdownDocsComponent } from './countdown/countdown.component';
import { ElisaHighlightDocsComponent } from './highlight/highlight.component';
import { ElisaMaterialColorPickerDocsComponent } from './material-color-picker/material-color-picker.component';
import { ElisaNavigationDocsComponent } from './navigation/navigation.component';
import { ElisaSearchBarDocsComponent } from './search-bar/search-bar.component';
import { ElisaSidebarDocsComponent } from './sidebar/sidebar.component';
import { ElisaShortcutsDocsComponent } from './shortcuts/shortcuts.component';
import { ElisaWidgetDocsComponent } from './widget/widget.component';

const routes = [
    {
        path     : 'cards',
        component: ElisaCardsDocsComponent
    },
    {
        path     : 'countdown',
        component: ElisaCountdownDocsComponent
    },
    {
        path     : 'highlight',
        component: ElisaHighlightDocsComponent
    },
    {
        path     : 'material-color-picker',
        component: ElisaMaterialColorPickerDocsComponent
    },
    {
        path     : 'navigation',
        component: ElisaNavigationDocsComponent
    },
    {
        path     : 'search-bar',
        component: ElisaSearchBarDocsComponent
    },
    {
        path     : 'sidebar',
        component: ElisaSidebarDocsComponent
    },
    {
        path     : 'shortcuts',
        component: ElisaShortcutsDocsComponent
    },
    {
        path     : 'widget',
        component: ElisaWidgetDocsComponent
    }
];

@NgModule({
    declarations: [
        ElisaCardsDocsComponent,
        ElisaCountdownDocsComponent,
        ElisaHighlightDocsComponent,
        ElisaMaterialColorPickerDocsComponent,
        ElisaNavigationDocsComponent,
        ElisaSearchBarDocsComponent,
        ElisaSidebarDocsComponent,
        ElisaShortcutsDocsComponent,
        ElisaWidgetDocsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTabsModule,

        NgxChartsModule,

        ElisaSharedModule,
        ElisaCountdownModule,
        ElisaHighlightModule,
        ElisaMaterialColorPickerModule,
        ElisaWidgetModule,
        ElisaAngularMaterialModule
    ]
})
export class ElisaComponentsModule
{
}
