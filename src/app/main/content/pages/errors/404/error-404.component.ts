import { Component } from '@angular/core';

import { ElisaConfigService } from '@elisa/services/config.service';

@Component({
    selector   : 'elisa-error-404',
    templateUrl: './error-404.component.html',
    styleUrls  : ['./error-404.component.scss']
})
export class ElisaError404Component
{
    constructor(
        private elisaConfig: ElisaConfigService
    )
    {
        this.elisaConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });
    }
}
