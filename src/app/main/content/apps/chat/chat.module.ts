import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatRadioModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { ElisaSharedModule } from '@elisa/shared.module';

import { ChatService } from './chat.service';
import { ElisaChatComponent } from './chat.component';
import { ElisaChatViewComponent } from './chat-view/chat-view.component';
import { ElisaChatStartComponent } from './chat-start/chat-start.component';
import { ElisaChatChatsSidenavComponent } from './sidenavs/left/chats/chats.component';
import { ElisaChatUserSidenavComponent } from './sidenavs/left/user/user.component';
import { ElisaChatLeftSidenavComponent } from './sidenavs/left/left.component';
import { ElisaChatRightSidenavComponent } from './sidenavs/right/right.component';
import { ElisaChatContactSidenavComponent } from './sidenavs/right/contact/contact.component';

const routes: Routes = [
    {
        path     : '**',
        component: ElisaChatComponent,
        children : [],
        resolve  : {
            chat: ChatService
        }
    }
];

@NgModule({
    declarations: [
        ElisaChatComponent,
        ElisaChatViewComponent,
        ElisaChatStartComponent,
        ElisaChatChatsSidenavComponent,
        ElisaChatUserSidenavComponent,
        ElisaChatLeftSidenavComponent,
        ElisaChatRightSidenavComponent,
        ElisaChatContactSidenavComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatRadioModule,
        MatSidenavModule,
        MatToolbarModule,

        ElisaSharedModule
    ],
    providers   : [
        ChatService
    ]
})
export class ElisaChatModule
{
}
