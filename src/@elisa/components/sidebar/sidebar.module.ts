import { NgModule } from '@angular/core';

import { ElisaSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        ElisaSidebarComponent
    ],
    exports     : [
        ElisaSidebarComponent
    ]
})
export class ElisaSidebarModule
{
}
