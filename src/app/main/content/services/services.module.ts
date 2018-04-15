import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaHighlightModule } from '@elisa/components';

import { ElisaConfigServiceDocsComponent } from './config/config.component';
import { ElisaSplashScreenServiceDocsComponent } from './splash-screen/splash-screen.component';

const routes = [
    {
        path     : 'config',
        component: ElisaConfigServiceDocsComponent
    },
    {
        path     : 'splash-screen',
        component: ElisaSplashScreenServiceDocsComponent
    }
];

@NgModule({
    declarations: [
        ElisaConfigServiceDocsComponent,
        ElisaSplashScreenServiceDocsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        ElisaSharedModule,
        ElisaHighlightModule
    ],
})

export class ElisaServicesModule
{
}
