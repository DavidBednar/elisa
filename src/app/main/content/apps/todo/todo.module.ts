import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSelectModule, MatSidenavModule } from '@angular/material';

import { NgxDnDModule } from '@swimlane/ngx-dnd';

import { ElisaSharedModule } from '@elisa/shared.module';

import { TodoService } from './todo.service';
import { ElisaTodoComponent } from './todo.component';
import { ElisaTodoMainSidenavComponent } from './sidenavs/main/main-sidenav.component';
import { ElisaTodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { ElisaTodoListComponent } from './todo-list/todo-list.component';
import { ElisaTodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
    {
        path     : 'all',
        component: ElisaTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'all/:todoId',
        component: ElisaTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'tag/:tagHandle',
        component: ElisaTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'tag/:tagHandle/:todoId',
        component: ElisaTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'filter/:filterHandle',
        component: ElisaTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'filter/:filterHandle/:todoId',
        component: ElisaTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path      : '**',
        redirectTo: 'all'
    }
];

@NgModule({
    declarations: [
        ElisaTodoComponent,
        ElisaTodoMainSidenavComponent,
        ElisaTodoListItemComponent,
        ElisaTodoListComponent,
        ElisaTodoDetailsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,

        NgxDnDModule,

        ElisaSharedModule,
    ],
    providers   : [
        TodoService
    ]
})
export class ElisaTodoModule
{
}
