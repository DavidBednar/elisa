import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { ElisaSharedModule } from '@elisa/shared.module';

import { MailAppStoreModule } from './store/store.module';
import * as fromGuards from './store/guards/index';

import { ElisaMailNgrxComponent } from './mail.component';
import { ElisaMailNgrxMainSidenavComponent } from './sidenavs/main/main-sidenav.component';
import { ElisaMailNgrxListItemComponent } from './mail-list/mail-list-item/mail-list-item.component';
import { ElisaMailNgrxListComponent } from './mail-list/mail-list.component';
import { ElisaMailNgrxDetailsComponent } from './mail-details/mail-details.component';
import { MailNgrxService } from './mail.service';
import { ElisaMailNgrxComposeDialogComponent } from './dialogs/compose/compose.component';

const routes: Routes = [
    {
        path       : 'label/:labelHandle',
        component  : ElisaMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path       : 'label/:labelHandle/:mailId',
        component  : ElisaMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path     : 'filter/:filterHandle',
        component: ElisaMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path     : 'filter/:filterHandle/:mailId',
        component: ElisaMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path     : ':folderHandle',
        component: ElisaMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path     : ':folderHandle/:mailId',
        component: ElisaMailNgrxComponent,
        canActivate: [fromGuards.ResolveGuard]
    },
    {
        path      : '**',
        redirectTo: 'inbox'
    }
];

@NgModule({
    declarations   : [
        ElisaMailNgrxComponent,
        ElisaMailNgrxListComponent,
        ElisaMailNgrxListItemComponent,
        ElisaMailNgrxDetailsComponent,
        ElisaMailNgrxMainSidenavComponent,
        ElisaMailNgrxComposeDialogComponent
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

        ElisaSharedModule,

        MailAppStoreModule
    ],
    providers      : [
        MailNgrxService,
        fromGuards.ResolveGuard
    ],
    entryComponents: [ElisaMailNgrxComposeDialogComponent]
})
export class ElisaMailNgrxModule
{
}
