import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { ElisaConfirmDialogComponent } from '@elisa/components/confirm-dialog/confirm-dialog.component';
import { ElisaPerfectScrollbarDirective } from '@elisa/directives/elisa-perfect-scrollbar/elisa-perfect-scrollbar.directive';

import { Card } from '../../card.model';
import { ScrumboardService } from '../../scrumboard.service';
import { ElisaScrumboardCardDialogComponent } from '../dialogs/card/card.component';

@Component({
    selector     : 'elisa-scrumboard-board-list',
    templateUrl  : './list.component.html',
    styleUrls    : ['./list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ElisaScrumboardBoardListComponent implements OnInit, OnDestroy
{
    board: any;
    dialogRef: any;

    @Input() list;
    @ViewChild(ElisaPerfectScrollbarDirective) listScroll: ElisaPerfectScrollbarDirective;

    onBoardChanged: Subscription;
    confirmDialogRef: MatDialogRef<ElisaConfirmDialogComponent>;

    constructor(
        private route: ActivatedRoute,
        private scrumboardService: ScrumboardService,
        public dialog: MatDialog
    )
    {
    }

    ngOnInit()
    {
        this.onBoardChanged =
            this.scrumboardService.onBoardChanged
                .subscribe(board => {
                    this.board = board;
                });
    }

    ngOnDestroy()
    {
        this.onBoardChanged.unsubscribe();
    }

    onListNameChanged(newListName)
    {
        this.list.name = newListName;
    }

    onCardAdd(newCardName)
    {
        if ( newCardName === '' )
        {
            return;
        }

        this.scrumboardService.addCard(this.list.id, new Card({name: newCardName}));

        setTimeout(() => {
            this.listScroll.scrollToBottom(0, 400);
        });

    }

    removeList(listId)
    {
        this.confirmDialogRef = this.dialog.open(ElisaConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the list and it\'s all cards?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if ( result )
            {
                this.scrumboardService.removeList(listId);
            }
        });
    }

    openCardDialog(cardId)
    {
        this.dialogRef = this.dialog.open(ElisaScrumboardCardDialogComponent, {
            panelClass: 'scrumboard-card-dialog',
            data      : {
                cardId: cardId,
                listId: this.list.id
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(response => {

            });
    }

    onDrop(ev)
    {
        this.scrumboardService.updateBoard();
    }
}
