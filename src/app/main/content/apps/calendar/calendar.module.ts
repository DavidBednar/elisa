import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatToolbarModule } from '@angular/material';

import { CalendarModule } from 'angular-calendar';
import { ColorPickerModule } from 'ngx-color-picker';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaConfirmDialogModule } from '@elisa/components';

import { CalendarService } from './calendar.service';
import { ElisaCalendarComponent } from './calendar.component';
import { ElisaCalendarEventFormDialogComponent } from './event-form/event-form.component';

const routes: Routes = [
    {
        path     : '**',
        component: ElisaCalendarComponent,
        children : [],
        resolve  : {
            chat: CalendarService
        }
    }
];

@NgModule({
    declarations   : [
        ElisaCalendarComponent,
        ElisaCalendarEventFormDialogComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatToolbarModule,

        CalendarModule.forRoot(),
        ColorPickerModule,

        ElisaSharedModule,
        ElisaConfirmDialogModule
    ],
    providers      : [
        CalendarService
    ],
    entryComponents: [ElisaCalendarEventFormDialogComponent]
})
export class ElisaCalendarModule
{
}
