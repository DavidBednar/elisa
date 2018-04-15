import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { ElisaNavigationComponent } from './navigation.component';
import { ElisaNavVerticalItemComponent } from './vertical/nav-item/nav-vertical-item.component';
import { ElisaNavVerticalCollapseComponent } from './vertical/nav-collapse/nav-vertical-collapse.component';
import { ElisaNavVerticalGroupComponent } from './vertical/nav-group/nav-vertical-group.component';
import { ElisaNavHorizontalItemComponent } from './horizontal/nav-item/nav-horizontal-item.component';
import { ElisaNavHorizontalCollapseComponent } from './horizontal/nav-collapse/nav-horizontal-collapse.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        ElisaNavigationComponent
    ],
    declarations: [
        ElisaNavigationComponent,
        ElisaNavVerticalGroupComponent,
        ElisaNavVerticalItemComponent,
        ElisaNavVerticalCollapseComponent,
        ElisaNavHorizontalItemComponent,
        ElisaNavHorizontalCollapseComponent
    ]
})
export class ElisaNavigationModule
{
}
