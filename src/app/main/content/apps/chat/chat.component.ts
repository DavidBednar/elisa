import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { elisaAnimations } from '@elisa/animations';

import { ChatService } from './chat.service';

@Component({
    selector     : 'elisa-chat',
    templateUrl  : './chat.component.html',
    styleUrls    : ['./chat.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : elisaAnimations
})
export class ElisaChatComponent implements OnInit
{
    selectedChat: any;

    constructor(private chatService: ChatService)
    {
    }

    ngOnInit()
    {
        this.chatService.onChatSelected
            .subscribe(chatData => {
                this.selectedChat = chatData;
            });
    }

}
