import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaNavigationModule, ElisaSearchBarModule, ElisaShortcutsModule, ElisaSidebarModule, ElisaThemeOptionsModule } from '@elisa/components';

import { ElisaContentModule } from 'app/main/content/content.module';
import { ElisaFooterModule } from 'app/main/footer/footer.module';
import { ElisaNavbarModule } from 'app/main/navbar/navbar.module';
import { ElisaQuickPanelModule } from 'app/main/quick-panel/quick-panel.module';
import { ElisaToolbarModule } from 'app/main/toolbar/toolbar.module';

import { ElisaMainComponent } from './main.component';


@NgModule({
    declarations: [
        ElisaMainComponent,
    ],
    imports     : [
        RouterModule,

        MatSidenavModule,

        ElisaSharedModule,

        ElisaThemeOptionsModule,
        ElisaNavigationModule,
        ElisaSearchBarModule,
        ElisaShortcutsModule,
        ElisaSidebarModule,

        ElisaContentModule,
        ElisaFooterModule,
        ElisaNavbarModule,
        ElisaQuickPanelModule,
        ElisaToolbarModule,
    ],
    exports     : [
        ElisaMainComponent
    ]
})
export class ElisaMainModule
{
}
