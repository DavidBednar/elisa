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
        path        : 'mail-ngrx',
        loadChildren: './mail-ngrx/mail.module#ElisaMailNgrxModule'
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
        path        : 'e-commerce',
        loadChildren: './e-commerce/e-commerce.module#ElisaEcommerceModule'
    },
    {
        path        : 'academy',
        loadChildren: './academy/academy.module#ElisaAcademyModule'
    },
    {
        path        : 'todo',
        loadChildren: './todo/todo.module#ElisaTodoModule'
    },
    {
        path        : 'file-manager',
        loadChildren: './file-manager/file-manager.module#ElisaFileManagerModule'
    },
    {
        path        : 'contacts',
        loadChildren: './contacts/contacts.module#ElisaContactsModule'
    },
    {
        path        : 'scrumboard',
        loadChildren: './scrumboard/scrumboard.module#ElisaScrumboardModule'
    }
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
