import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../../chat.service';

@Component({
    selector   : 'elisa-chat-contact-sidenav',
    templateUrl: './contact.component.html',
    styleUrls  : ['./contact.component.scss']
})
export class ElisaChatContactSidenavComponent implements OnInit
{
    contact: any;

    constructor(private chatService: ChatService)
    {

    }

    ngOnInit()
    {
        this.chatService.onContactSelected.subscribe(contact => {
            this.contact = contact;
        });
    }

}
