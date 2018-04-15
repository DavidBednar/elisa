import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { KnowledgeBaseService } from './knowledge-base.service';
import { ElisaKnowledgeBaseComponent } from './knowledge-base.component';
import { ElisaKnowledgeBaseArticleComponent } from './dialogs/article/article.component';

const routes = [
    {
        path     : 'knowledge-base',
        component: ElisaKnowledgeBaseComponent,
        resolve  : {
            knowledgeBase: KnowledgeBaseService
        }
    }
];

@NgModule({
    declarations   : [
        ElisaKnowledgeBaseComponent,
        ElisaKnowledgeBaseArticleComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,

        ElisaSharedModule
    ],
    providers      : [
        KnowledgeBaseService
    ],
    entryComponents: [
        ElisaKnowledgeBaseArticleComponent
    ]
})
export class KnowledgeBaseModule
{
}
