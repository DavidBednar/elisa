import { NgModule } from '@angular/core';

import { ElisaWidgetComponent } from './widget.component';
import { ElisaWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        ElisaWidgetComponent,
        ElisaWidgetToggleDirective
    ],
    exports     : [
        ElisaWidgetComponent,
        ElisaWidgetToggleDirective
    ],
})
export class ElisaWidgetModule
{
}
