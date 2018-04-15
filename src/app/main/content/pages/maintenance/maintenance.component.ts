import { Component } from '@angular/core';

import { ElisaConfigService } from '@elisa/services/config.service';
import { elisaAnimations } from '@elisa/animations';

@Component({
    selector   : 'elisa-maintenance',
    templateUrl: './maintenance.component.html',
    styleUrls  : ['./maintenance.component.scss'],
    animations : elisaAnimations
})
export class ElisaMaintenanceComponent
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
