import { Component } from '@angular/core';

import { ElisaConfigService } from '@elisa/services/config.service';

@Component({
    selector   : 'elisa-error-500',
    templateUrl: './error-500.component.html',
    styleUrls  : ['./error-500.component.scss']
})
export class ElisaError500Component
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
