import { NgModule } from '@angular/core';

import { ElisaCountdownComponent } from '@elisa/components/countdown/countdown.component';

@NgModule({
    declarations: [
        ElisaCountdownComponent
    ],
    exports: [
        ElisaCountdownComponent
    ],
})
export class ElisaCountdownModule
{
}
