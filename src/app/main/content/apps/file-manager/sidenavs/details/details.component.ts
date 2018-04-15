import { Component, OnInit } from '@angular/core';

import { elisaAnimations } from '@elisa/animations/index';

import { FileManagerService } from '../../file-manager.service';

@Component({
    selector   : 'elisa-file-manager-details-sidenav',
    templateUrl: './details.component.html',
    styleUrls  : ['./details.component.scss'],
    animations : elisaAnimations
})
export class ElisaFileManagerDetailsSidenavComponent implements OnInit
{

    selected: any;

    constructor(private fileManagerService: FileManagerService)
    {

    }

    ngOnInit()
    {
        this.fileManagerService.onFileSelected.subscribe(selected => {
            this.selected = selected;
        });
    }

}
