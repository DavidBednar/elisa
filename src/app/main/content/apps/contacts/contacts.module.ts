import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSidenavModule, MatTableModule, MatToolbarModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaConfirmDialogModule } from '@elisa/components';

import { ElisaContactsMainSidenavComponent } from './sidenavs/main/main.component';
import { ElisaContactsComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { ElisaContactsContactListComponent } from './contact-list/contact-list.component';
import { ElisaContactsSelectedBarComponent } from './selected-bar/selected-bar.component';
import { ElisaContactsContactFormDialogComponent } from './contact-form/contact-form.component';

const routes: Routes = [
    {
        path     : '**',
        component: ElisaContactsComponent,
        resolve  : {
            contacts: ContactsService
        }
    }
];

@NgModule({
    declarations   : [
        ElisaContactsComponent,
        ElisaContactsContactListComponent,
        ElisaContactsSelectedBarComponent,
        ElisaContactsMainSidenavComponent,
        ElisaContactsContactFormDialogComponent
    ],
    imports        : [
        RouterModule.forChild(routes),
        CdkTableModule,

        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule,

        ElisaSharedModule,
        ElisaConfirmDialogModule
    ],
    providers      : [
        ContactsService
    ],
    entryComponents: [ElisaContactsContactFormDialogComponent]
})
export class ElisaContactsModule
{
}
