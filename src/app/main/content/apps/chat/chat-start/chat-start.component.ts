import { Component } from '@angular/core';

import { elisaAnimations } from '@elisa/animations';

@Component({
    selector   : 'elisa-chat-start',
    templateUrl: './chat-start.component.html',
    styleUrls  : ['./chat-start.component.scss'],
    animations : elisaAnimations
})
export class ElisaChatStartComponent
{
    constructor()
    {
    }
}
