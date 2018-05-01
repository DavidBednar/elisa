import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElisaAngularMaterialModule } from '../components/angular-material/angular-material.module';

import { ElisaSharedModule } from '@elisa/shared.module';

const routes = [
    {
        path        : 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#ElisaAnalyticsDashboardModule'
    },
    {
        path        : 'dashboards/project',
        loadChildren: './dashboards/project/project.module#ElisaProjectDashboardModule'
    },
    {
        path        : 'mail',
        loadChildren: './mail/mail.module#ElisaMailModule'
    },
    {
        path        : 'chat',
        loadChildren: './chat/chat.module#ElisaChatModule'
    },
    {
        path        : 'calendar',
        loadChildren: './calendar/calendar.module#ElisaCalendarModule'
    },
    {
        path        : 'contacts',
        loadChildren: './contacts/contacts.module#ElisaContactsModule'
    },
];

@NgModule({
    imports     : [
        ElisaSharedModule,
        RouterModule.forChild(routes),
        ElisaAngularMaterialModule
    ],
    declarations: []
})
export class ElisaAppsModule
{
}
