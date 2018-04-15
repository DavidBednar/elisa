import { Component, OnInit } from '@angular/core';

import { elisaAnimations } from '@elisa/animations';

import { ChatService } from '../../chat.service';

@Component({
    selector   : 'elisa-chat-right-sidenav',
    templateUrl: './right.component.html',
    styleUrls  : ['./right.component.scss'],
    animations : elisaAnimations
})
export class ElisaChatRightSidenavComponent implements OnInit
{
    view: string;

    constructor(private chatService: ChatService)
    {
        this.view = 'contact';
    }

    ngOnInit()
    {
        this.chatService.onRightSidenavViewChanged.subscribe(view => {
            this.view = view;
        });
    }

}
