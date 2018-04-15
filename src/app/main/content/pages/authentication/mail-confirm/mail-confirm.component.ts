import { Component } from '@angular/core';

import { ElisaConfigService } from '@elisa/services/config.service';
import { elisaAnimations } from '@elisa/animations';

@Component({
    selector   : 'elisa-mail-confirm',
    templateUrl: './mail-confirm.component.html',
    styleUrls  : ['./mail-confirm.component.scss'],
    animations : elisaAnimations
})
export class ElisaMailConfirmComponent
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
