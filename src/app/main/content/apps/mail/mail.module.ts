import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { ElisaSharedModule } from '@elisa/shared.module';

import { MailService } from './mail.service';
import { ElisaMailComponent } from './mail.component';
import { ElisaMailMainSidenavComponent } from './sidenavs/main/main-sidenav.component';
import { ElisaMailListItemComponent } from './mail-list/mail-list-item/mail-list-item.component';
import { ElisaMailListComponent } from './mail-list/mail-list.component';
import { ElisaMailDetailsComponent } from './mail-details/mail-details.component';
import { ElisaMailComposeDialogComponent } from './dialogs/compose/compose.component';

const routes: Routes = [
    {
        path     : 'label/:labelHandle',
        component: ElisaMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : 'label/:labelHandle/:mailId',
        component: ElisaMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : 'filter/:filterHandle',
        component: ElisaMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : 'filter/:filterHandle/:mailId',
        component: ElisaMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : ':folderHandle',
        component: ElisaMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : ':folderHandle/:mailId',
        component: ElisaMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path      : '**',
        redirectTo: 'inbox'
    }
];

@NgModule({
    declarations   : [
        ElisaMailComponent,
        ElisaMailListComponent,
        ElisaMailListItemComponent,
        ElisaMailDetailsComponent,
        ElisaMailMainSidenavComponent,
        ElisaMailComposeDialogComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,

        TranslateModule,

        ElisaSharedModule
    ],
    providers      : [
        MailService
    ],
    entryComponents: [ElisaMailComposeDialogComponent]
})
export class ElisaMailModule
{
}
