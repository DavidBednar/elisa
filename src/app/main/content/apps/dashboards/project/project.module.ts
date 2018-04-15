import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatSidenavModule, MatTableModule, MatTabsModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaWidgetModule } from '@elisa/components/widget/widget.module';

import { ElisaProjectDashboardComponent } from './project.component';
import { ProjectDashboardService } from './project.service';

const routes: Routes = [
    {
        path     : '**',
        component: ElisaProjectDashboardComponent,
        resolve  : {
            data: ProjectDashboardService
        }
    }
];

@NgModule({
    declarations: [
        ElisaProjectDashboardComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        CdkTableModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatSidenavModule,
        MatTableModule,
        MatTabsModule,

        NgxChartsModule,

        ElisaSharedModule,
        ElisaWidgetModule
    ],
    providers   : [
        ProjectDashboardService
    ]
})
export class ElisaProjectDashboardModule
{
}

