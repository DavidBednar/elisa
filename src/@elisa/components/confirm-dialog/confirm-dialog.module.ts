import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { ElisaConfirmDialogComponent } from '@elisa/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        ElisaConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        ElisaConfirmDialogComponent
    ],
})
export class ElisaConfirmDialogModule
{
}
