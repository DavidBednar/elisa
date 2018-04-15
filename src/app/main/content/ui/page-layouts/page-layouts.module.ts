import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatIconModule, MatSidenavModule, MatTabsModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaDemoModule } from '@elisa/components/demo/demo.module';

import { ElisaCardedFullWidthComponent } from './carded/fullwidth/fullwidth.component';
import { ElisaCardedFullWidth2Component } from './carded/fullwidth-2/fullwidth-2.component';
import { ElisaCardedLeftSidenavComponent } from './carded/left-sidenav/left-sidenav.component';
import { ElisaCardedLeftSidenavTabbedComponent } from './carded/left-sidenav-tabbed/left-sidenav-tabbed.component';
import { ElisaCardedLeftSidenav2Component } from './carded/left-sidenav-2/left-sidenav-2.component';
import { ElisaCardedLeftSidenav2TabbedComponent } from './carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component';
import { ElisaCardedRightSidenavComponent } from './carded/right-sidenav/right-sidenav.component';
import { ElisaCardedRightSidenavTabbedComponent } from './carded/right-sidenav-tabbed/right-sidenav-tabbed.component';
import { ElisaCardedRightSidenav2Component } from './carded/right-sidenav-2/right-sidenav-2.component';
import { ElisaCardedRightSidenav2TabbedComponent } from './carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component';
import { ElisaSimpleFullWidthComponent } from './simple/fullwidth/fullwidth.component';
import { ElisaSimpleLeftSidenavComponent } from './simple/left-sidenav/left-sidenav.component';
import { ElisaSimpleLeftSidenav2Component } from './simple/left-sidenav-2/left-sidenav-2.component';
import { ElisaSimpleLeftSidenav3Component } from './simple/left-sidenav-3/left-sidenav-3.component';
import { ElisaSimpleRightSidenavComponent } from './simple/right-sidenav/right-sidenav.component';
import { ElisaSimpleRightSidenav2Component } from './simple/right-sidenav-2/right-sidenav-2.component';
import { ElisaSimpleRightSidenav3Component } from './simple/right-sidenav-3/right-sidenav-3.component';
import { ElisaTabbedComponent } from './simple/tabbed/tabbed.component';
import { ElisaBlankComponent } from './blank/blank.component';

const routes: Routes = [
    {
        path     : 'page-layouts/carded/full-width',
        component: ElisaCardedFullWidthComponent
    },
    {
        path     : 'page-layouts/carded/full-width-2',
        component: ElisaCardedFullWidth2Component
    },
    {
        path     : 'page-layouts/carded/left-sidenav',
        component: ElisaCardedLeftSidenavComponent
    },
    {
        path     : 'page-layouts/carded/left-sidenav-tabbed',
        component: ElisaCardedLeftSidenavTabbedComponent
    },
    {
        path     : 'page-layouts/carded/left-sidenav-2',
        component: ElisaCardedLeftSidenav2Component
    },
    {
        path     : 'page-layouts/carded/left-sidenav-2-tabbed',
        component: ElisaCardedLeftSidenav2TabbedComponent
    },
    {
        path     : 'page-layouts/carded/right-sidenav',
        component: ElisaCardedRightSidenavComponent
    },
    {
        path     : 'page-layouts/carded/right-sidenav-tabbed',
        component: ElisaCardedRightSidenavTabbedComponent
    },
    {
        path     : 'page-layouts/carded/right-sidenav-2',
        component: ElisaCardedRightSidenav2Component
    },
    {
        path     : 'page-layouts/carded/right-sidenav-2-tabbed',
        component: ElisaCardedRightSidenav2TabbedComponent
    },
    {
        path     : 'page-layouts/simple/full-width',
        component: ElisaSimpleFullWidthComponent
    },
    {
        path     : 'page-layouts/simple/left-sidenav',
        component: ElisaSimpleLeftSidenavComponent
    },
    {
        path     : 'page-layouts/simple/left-sidenav-2',
        component: ElisaSimpleLeftSidenav2Component
    },
    {
        path     : 'page-layouts/simple/left-sidenav-3',
        component: ElisaSimpleLeftSidenav3Component
    },
    {
        path     : 'page-layouts/simple/right-sidenav',
        component: ElisaSimpleRightSidenavComponent
    },
    {
        path     : 'page-layouts/simple/right-sidenav-2',
        component: ElisaSimpleRightSidenav2Component
    },
    {
        path     : 'page-layouts/simple/right-sidenav-3',
        component: ElisaSimpleRightSidenav3Component
    },
    {
        path     : 'page-layouts/simple/tabbed',
        component: ElisaTabbedComponent
    },
    {
        path     : 'page-layouts/blank',
        component: ElisaBlankComponent
    }
];

@NgModule({
    declarations: [
        ElisaCardedFullWidthComponent,
        ElisaCardedFullWidth2Component,
        ElisaCardedLeftSidenavComponent,
        ElisaCardedLeftSidenavTabbedComponent,
        ElisaCardedLeftSidenav2Component,
        ElisaCardedLeftSidenav2TabbedComponent,
        ElisaCardedRightSidenavComponent,
        ElisaCardedRightSidenavTabbedComponent,
        ElisaCardedRightSidenav2Component,
        ElisaCardedRightSidenav2TabbedComponent,
        ElisaSimpleFullWidthComponent,
        ElisaSimpleLeftSidenavComponent,
        ElisaSimpleLeftSidenav2Component,
        ElisaSimpleLeftSidenav3Component,
        ElisaSimpleRightSidenavComponent,
        ElisaSimpleRightSidenav2Component,
        ElisaSimpleRightSidenav3Component,
        ElisaTabbedComponent,
        ElisaBlankComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,

        ElisaSharedModule,
        ElisaDemoModule
    ]
})
export class UIPageLayoutsModule
{
}
