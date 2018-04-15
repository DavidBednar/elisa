import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { elisaAnimations } from '@elisa/animations';

import { FileManagerService } from './file-manager.service';

@Component({
    selector     : 'elisa-file-manager',
    templateUrl  : './file-manager.component.html',
    styleUrls    : ['./file-manager.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : elisaAnimations
})
export class ElisaFileManagerComponent implements OnInit
{
    selected: any;
    pathArr: string[];

    constructor(private fileManagerService: FileManagerService)
    {
    }

    ngOnInit()
    {
        this.fileManagerService.onFileSelected.subscribe(selected => {
            this.selected = selected;
            this.pathArr = selected.location.split('>');
        });
    }
}
