import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import { MatButtonModule, MatIconModule, MatRippleModule, MatSidenavModule, MatSlideToggleModule, MatTableModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaFileManagerComponent } from './file-manager.component';
import { FileManagerService } from './file-manager.service';
import { ElisaFileManagerFileListComponent } from './file-list/file-list.component';
import { ElisaFileManagerMainSidenavComponent } from './sidenavs/main/main.component';
import { ElisaFileManagerDetailsSidenavComponent } from './sidenavs/details/details.component';

const routes: Routes = [
    {
        path     : '**',
        component: ElisaFileManagerComponent,
        children : [],
        resolve  : {
            files: FileManagerService
        }
    }
];

@NgModule({
    declarations: [
        ElisaFileManagerComponent,
        ElisaFileManagerFileListComponent,
        ElisaFileManagerMainSidenavComponent,
        ElisaFileManagerDetailsSidenavComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        CdkTableModule,
        MatButtonModule,
        MatIconModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatTableModule,

        ElisaSharedModule
    ],
    providers   : [
        FileManagerService
    ]
})
export class ElisaFileManagerModule
{
}
