import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector   : 'elisa-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class ElisaConfirmDialogComponent
{
    public confirmMessage: string;

    constructor(public dialogRef: MatDialogRef<ElisaConfirmDialogComponent>)
    {
    }

}
