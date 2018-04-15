import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector     : 'elisa-knowledge-base-article',
    templateUrl  : './article.component.html',
    styleUrls    : ['./article.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ElisaKnowledgeBaseArticleComponent
{
    article: any;

    constructor(
        public dialogRef: MatDialogRef<ElisaKnowledgeBaseArticleComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    )
    {
    }
}
