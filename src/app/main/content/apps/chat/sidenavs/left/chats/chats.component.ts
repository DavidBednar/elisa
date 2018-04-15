import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

import { elisaAnimations } from '@elisa/animations';
import { ElisaMatSidenavHelperService } from '@elisa/directives/elisa-mat-sidenav/elisa-mat-sidenav.service';

import { ChatService } from '../../../chat.service';

@Component({
    selector   : 'elisa-chat-chats-sidenav',
    templateUrl: './chats.component.html',
    styleUrls  : ['./chats.component.scss'],
    animations : elisaAnimations
})
export class ElisaChatChatsSidenavComponent implements OnInit
{
    user: any;
    chats: any[];
    contacts: any[];
    chatSearch: any;
    searchText = '';

    constructor(
        private chatService: ChatService,
        private elisaMatSidenavService: ElisaMatSidenavHelperService,
        public media: ObservableMedia
    )
    {
        this.chatSearch = {
            name: ''
        };
    }

    ngOnInit()
    {
        this.user = this.chatService.user;
        this.chats = this.chatService.chats;
        this.contacts = this.chatService.contacts;

        this.chatService.onChatsUpdated.subscribe(updatedChats => {
            this.chats = updatedChats;
        });

        this.chatService.onUserUpdated.subscribe(updatedUser => {
            this.user = updatedUser;
        });
    }

    getChat(contact)
    {
        this.chatService.getChat(contact);

        if ( !this.media.isActive('gt-md') )
        {
            this.elisaMatSidenavService.getSidenav('chat-left-sidenav').toggle();
        }
    }

    setUserStatus(status)
    {
        this.chatService.setUserStatus(status);
    }

    changeLeftSidenavView(view)
    {
        this.chatService.onLeftSidenavViewChanged.next(view);
    }

    logout()
    {
        console.log('logout triggered');
    }
}
