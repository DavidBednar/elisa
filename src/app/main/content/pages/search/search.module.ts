import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule, MatTabsModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { SearchService } from './search.service';
import { ElisaSearchClassicComponent } from './tabs/classic/classic.component';
import { ElisaSearchTableComponent } from './tabs/table/table.component';
import { ElisaSearchComponent } from './search.component';

const routes = [
    {
        path     : 'search',
        component: ElisaSearchComponent,
        resolve  : {
            search: SearchService
        }
    }
];

@NgModule({
    declarations: [
        ElisaSearchComponent,
        ElisaSearchClassicComponent,
        ElisaSearchTableComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        CdkTableModule,

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatTabsModule,

        ElisaSharedModule
    ],
    providers   : [
        SearchService
    ]
})
export class SearchModule
{
}
