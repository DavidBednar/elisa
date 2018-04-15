import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaIconsComponent } from './icons.component';

const routes: Routes = [
    {
        path     : 'icons',
        component: ElisaIconsComponent
    }
];

@NgModule({
    declarations: [
        ElisaIconsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,

        ElisaSharedModule
    ]
})
export class UIIconsModule
{
}
