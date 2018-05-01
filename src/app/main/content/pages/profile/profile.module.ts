import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatDividerModule, MatIconModule, MatTabsModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ProfileService } from './profile.service';
import { ElisaProfileComponent } from './profile.component';
import { ElisaProfileAboutComponent } from './tabs/about/about.component';

const routes = [
    {
        path     : 'profile',
        component: ElisaProfileComponent,
        resolve  : {
            profile: ProfileService
        }
    }
];

@NgModule({
    declarations: [
        ElisaProfileComponent,
        ElisaProfileAboutComponent,
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatTabsModule,

        ElisaSharedModule
    ],
    providers   : [
        ProfileService
    ]
})
export class ProfileModule
{
}
