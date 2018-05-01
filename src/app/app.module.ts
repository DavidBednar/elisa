import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { ElisaModule } from '@elisa/elisa.module';
import { ElisaSharedModule } from '@elisa/shared.module';

import { elisaConfig } from './elisa-config';

import { AppComponent } from './app.component';
import { ElisaFakeDbService } from './elisa-fake-db/elisa-fake-db.service';
import { ElisaMainModule } from './main/main.module';
import { AppStoreModule } from './store/store.module';

const appRoutes: Routes = [
    {
        path        : 'apps',
        loadChildren: './main/content/apps/apps.module#ElisaAppsModule'
    },
    {
        path        : 'pages',
        loadChildren: './main/content/pages/pages.module#ElisaPagesModule'
    },
    {
        path        : 'services',
        loadChildren: './main/content/services/services.module#ElisaServicesModule'
    },
    {
        path        : 'components',
        loadChildren: './main/content/components/components.module#ElisaComponentsModule'
    },
    {
        path      : '**',
        redirectTo: 'apps/dashboards/analytics'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(ElisaFakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Elisa Main and Shared modules
        ElisaModule.forRoot(elisaConfig),
        ElisaSharedModule,

        AppStoreModule,
        ElisaMainModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
