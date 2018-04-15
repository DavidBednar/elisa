import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'elisa-navigation',
    templateUrl  : './navigation.component.html',
    styleUrls    : ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ElisaNavigationComponent
{
    @Input() layout = 'vertical';
    @Input() navigation: any;

    constructor()
    {

    }
}
