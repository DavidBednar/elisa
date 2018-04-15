import { Component } from '@angular/core';

import { SearchService } from '../../search.service';

@Component({
    selector   : 'elisa-search-classic',
    templateUrl: './classic.component.html',
    styleUrls  : ['./classic.component.scss']
})
export class ElisaSearchClassicComponent
{
    classic: any;

    constructor(private searchService: SearchService)
    {
        this.searchService.classicOnChanged.subscribe(classic => {
            this.classic = classic;
        });
    }
}
