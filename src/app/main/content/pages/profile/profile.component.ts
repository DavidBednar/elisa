import { Component, ViewEncapsulation } from '@angular/core';

import { elisaAnimations } from '@elisa/animations';

@Component({
    selector     : 'elisa-profile',
    templateUrl  : './profile.component.html',
    styleUrls    : ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : elisaAnimations
})
export class ElisaProfileComponent
{

    constructor()
    {

    }
}
