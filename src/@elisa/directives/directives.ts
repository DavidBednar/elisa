import { NgModule } from '@angular/core';

import { ElisaIfOnDomDirective } from '@elisa/directives/elisa-if-on-dom/elisa-if-on-dom.directive';
import { ElisaPerfectScrollbarDirective } from '@elisa/directives/elisa-perfect-scrollbar/elisa-perfect-scrollbar.directive';
import { ElisaMatSidenavHelperDirective, ElisaMatSidenavTogglerDirective } from '@elisa/directives/elisa-mat-sidenav/elisa-mat-sidenav.directive';

@NgModule({
    declarations: [
        ElisaIfOnDomDirective,
        ElisaMatSidenavHelperDirective,
        ElisaMatSidenavTogglerDirective,
        ElisaPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        ElisaIfOnDomDirective,
        ElisaMatSidenavHelperDirective,
        ElisaMatSidenavTogglerDirective,
        ElisaPerfectScrollbarDirective
    ]
})
export class ElisaDirectivesModule
{
}
