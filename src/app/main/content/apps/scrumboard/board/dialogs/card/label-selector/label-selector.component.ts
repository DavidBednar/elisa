import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { elisaAnimations } from '@elisa/animations';
import { ElisaUtils } from '@elisa/utils';

import { ScrumboardService } from '../../../../scrumboard.service';

@Component({
    selector     : 'elisa-scrumboard-label-selector',
    templateUrl  : './label-selector.component.html',
    styleUrls    : ['./label-selector.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : elisaAnimations
})

export class ElisaScrumboardLabelSelectorComponent implements OnInit, OnDestroy
{
    board: any;
    @Input('card') card: any;
    @Output() onCardLabelsChange = new EventEmitter();

    labelsMenuView = 'labels';
    selectedLabel: any;
    newLabel = {
        'id'   : '',
        'name' : '',
        'color': 'mat-blue-400-bg'
    };
    toggleInArray = ElisaUtils.toggleInArray;

    onBoardChanged: Subscription;

    constructor(
        private scrumboardService: ScrumboardService
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

    cardLabelsChanged()
    {
        this.onCardLabelsChange.next();
    }

    onLabelChange()
    {
        this.scrumboardService.updateBoard();
    }

    addNewLabel()
    {
        this.newLabel.id = ElisaUtils.generateGUID();
        this.board.labels.push(Object.assign({}, this.newLabel));
        this.newLabel.name = '';
        this.labelsMenuView = 'labels';
    }
}
