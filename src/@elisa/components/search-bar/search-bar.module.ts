import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { ElisaSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        ElisaSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        ElisaSearchBarComponent
    ]
})
export class ElisaSearchBarModule
{
}
