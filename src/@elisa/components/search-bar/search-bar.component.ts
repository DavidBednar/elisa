import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ElisaConfigService } from '@elisa/services/config.service';

@Component({
    selector   : 'elisa-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls  : ['./search-bar.component.scss']
})
export class ElisaSearchBarComponent
{
    collapsed: boolean;
    toolbarColor: string;
    @Output() onInput: EventEmitter<any> = new EventEmitter();
    onConfigChanged: Subscription;

    constructor(
        private elisaConfig: ElisaConfigService
    )
    {
        this.collapsed = true;
        this.onConfigChanged =
            this.elisaConfig.onConfigChanged
                .subscribe(
                    (newSettings) => {
                        this.toolbarColor = newSettings.colorClasses.toolbar;
                    }
                );
    }

    collapse()
    {
        this.collapsed = true;
    }

    expand()
    {
        this.collapsed = false;
    }

    search(event)
    {
        const value = event.target.value;

        this.onInput.emit(value);
    }

}
