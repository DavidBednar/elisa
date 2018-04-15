import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule, MatRippleModule, MatSidenavModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';
import { ElisaConfirmDialogModule, ElisaMaterialColorPickerModule } from '@elisa/components';

import { BoardResolve, ScrumboardService } from './scrumboard.service';
import { ElisaScrumboardComponent } from './scrumboard.component';
import { ElisaScrumboardBoardComponent } from './board/board.component';
import { ElisaScrumboardBoardListComponent } from './board/list/list.component';
import { ElisaScrumboardBoardCardComponent } from './board/list/card/card.component';
import { ElisaScrumboardBoardEditListNameComponent } from './board/list/edit-list-name/edit-list-name.component';
import { ElisaScrumboardBoardAddCardComponent } from './board/list/add-card/add-card.component';
import { ElisaScrumboardBoardAddListComponent } from './board/add-list/add-list.component';
import { ElisaScrumboardCardDialogComponent } from './board/dialogs/card/card.component';
import { ElisaScrumboardLabelSelectorComponent } from './board/dialogs/card/label-selector/label-selector.component';
import { ElisaScrumboardEditBoardNameComponent } from './board/edit-board-name/edit-board-name.component';
import { ElisaScrumboardBoardSettingsSidenavComponent } from './board/sidenavs/settings/settings.component';
import { ElisaScrumboardBoardColorSelectorComponent } from './board/sidenavs/settings/board-color-selector/board-color-selector.component';
import { NgxDnDModule } from '@swimlane/ngx-dnd';

const routes: Routes = [
    {
        path     : 'boards',
        component: ElisaScrumboardComponent,
        resolve  : {
            scrumboard: ScrumboardService
        }
    },
    {
        path     : 'boards/:boardId/:boardUri',
        component: ElisaScrumboardBoardComponent,
        resolve  : {
            board: BoardResolve
        }
    },
    {
        path      : '**',
        redirectTo: 'boards'
    }
];

@NgModule({
    declarations   : [
        ElisaScrumboardComponent,
        ElisaScrumboardBoardComponent,
        ElisaScrumboardBoardListComponent,
        ElisaScrumboardBoardCardComponent,
        ElisaScrumboardBoardEditListNameComponent,
        ElisaScrumboardBoardAddCardComponent,
        ElisaScrumboardBoardAddListComponent,
        ElisaScrumboardCardDialogComponent,
        ElisaScrumboardLabelSelectorComponent,
        ElisaScrumboardEditBoardNameComponent,
        ElisaScrumboardBoardSettingsSidenavComponent,
        ElisaScrumboardBoardColorSelectorComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTooltipModule,

        NgxDnDModule,

        ElisaSharedModule,
        ElisaConfirmDialogModule,
        ElisaMaterialColorPickerModule
    ],
    providers      : [
        ScrumboardService,
        BoardResolve
    ],
    entryComponents: [ElisaScrumboardCardDialogComponent]
})
export class ElisaScrumboardModule
{
}
