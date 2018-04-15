import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTabsModule } from '@angular/material';

import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaWidgetModule } from '@elisa/components/widget/widget.module';

import { ElisaAnalyticsDashboardComponent } from './analytics.component';
import { AnalyticsDashboardService } from './analytics.service';


const routes: Routes = [
    {
        path     : '**',
        component: ElisaAnalyticsDashboardComponent,
        resolve  : {
            data: AnalyticsDashboardService
        }
    }
];

@NgModule({
    declarations: [
        ElisaAnalyticsDashboardComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTabsModule,

        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),
        ChartsModule,
        NgxChartsModule,

        ElisaSharedModule,
        ElisaWidgetModule
    ],
    providers   : [
        AnalyticsDashboardService
    ]
})
export class ElisaAnalyticsDashboardModule
{
}

