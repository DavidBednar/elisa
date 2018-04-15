import { Component, HostBinding, HostListener, Input, OnDestroy } from '@angular/core';
import { elisaAnimations } from '../../../../animations/index';
import { ElisaConfigService } from '../../../../services/config.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector   : 'elisa-nav-horizontal-collapse',
    templateUrl: './nav-horizontal-collapse.component.html',
    styleUrls  : ['./nav-horizontal-collapse.component.scss'],
    animations : elisaAnimations
})
export class ElisaNavHorizontalCollapseComponent implements OnDestroy
{
    onConfigChanged: Subscription;
    elisaSettings: any;
    isOpen = false;

    @HostBinding('class') classes = 'nav-item nav-collapse';
    @Input() item: any;

    @HostListener('mouseenter')
    open()
    {
        this.isOpen = true;
    }

    @HostListener('mouseleave')
    close()
    {
        this.isOpen = false;
    }

    constructor(
        private elisaConfig: ElisaConfigService
    )
    {
        this.onConfigChanged =
            this.elisaConfig.onConfigChanged
                .subscribe(
                    (newSettings) => {
                        this.elisaSettings = newSettings;
                    }
                );
    }

    ngOnDestroy()
    {
        this.onConfigChanged.unsubscribe();
    }
}
