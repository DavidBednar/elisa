import { Component, OnInit } from '@angular/core';

import { elisaAnimations } from '@elisa/animations';

import { ChatService } from '../../chat.service';

@Component({
    selector   : 'elisa-chat-left-sidenav',
    templateUrl: './left.component.html',
    styleUrls  : ['./left.component.scss'],
    animations : elisaAnimations
})
export class ElisaChatLeftSidenavComponent implements OnInit
{
    view: string;

    constructor(private chatService: ChatService)
    {
        this.view = 'chats';
    }

    ngOnInit()
    {
        this.chatService.onLeftSidenavViewChanged.subscribe(view => {
            this.view = view;
        });
    }

}
