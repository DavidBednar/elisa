import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { AgmCoreModule } from '@agm/core';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaHighlightModule } from '@elisa/components';

import { ElisaGoogleMapsDocsComponent } from './google-maps.component';

const routes = [
    {
        path     : 'google-maps',
        component: ElisaGoogleMapsDocsComponent
    }
];

@NgModule({
    declarations: [
        ElisaGoogleMapsDocsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),

        ElisaSharedModule,
        ElisaHighlightModule
    ],
})
export class GoogleMapsModule
{
}
