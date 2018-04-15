import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ElisaFormsComponent } from './forms.component';

const routes: Routes = [
    {
        path     : 'forms',
        component: ElisaFormsComponent
    }
];

@NgModule({
    declarations: [
        ElisaFormsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,

        ElisaSharedModule,
    ]
})
export class UIFormsModule
{
}
